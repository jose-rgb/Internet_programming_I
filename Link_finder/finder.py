import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache()



def main():
    print(23 * '#'+' Buscador de links '+ 23 * '#')
    url = requests.get(input('Digite a URL da página a ser baixada: '))
    text = url.text

    html = BeautifulSoup(text, 'html.parser')
    html_doc = html.prettify()

    soup = BeautifulSoup(html_doc, 'html.parser')
    ten_links = first_ten_links(soup)

    menu(ten_links)

    get_out = int(input('>>>>>\n0 - sair\n1 - consultar novamente'))
    if get_out == 1:
        main()

def find_key(key, soup, link):
    texto = soup.get_text()
    
    c = 0
    for palavra in texto.split():
        if key in palavra:
            print(palavra)
            print(f'foi encontrado no link: {link}')
            c += 1

    if c == 0:
        print(f'A palavra chave: {key} não foi encontrada no link: {link}')


def first_ten_links(soup):
    links = []
    for link in soup.find_all('a'):
        indice = link.get('href')
        links.append(indice)

    return links[0:10]



def  second_page(key, number_link, ten_links):
    c = 1
    for link in ten_links:
        if number_link == c:
            response = requests.get(link)
            text = response.text
            html = BeautifulSoup(text, 'html.parser')
            html_doc = html.prettify()
            soup = BeautifulSoup(html_doc, 'html.parser')
            find_key(key, soup, link)
        c += 1



def menu(ten_links):
    print('\nEstes são os 10 primeiros  links encontrados: \n')

    c = 0
    while c < 10:
        print(f'{c+1}. {ten_links[c]}')
        c += 1
    key = str(input('\nDigite uma palavra chave: '))
    number_link = int(input('Agora digite o número de um dos links: '))
    second_page(key, number_link, ten_links)


main()