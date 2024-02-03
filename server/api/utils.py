import requests
from bs4 import BeautifulSoup

def get_soup(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    try:
        with requests.Session() as session:
            response = session.get(url, headers=headers)
            html = response.text
            return BeautifulSoup(html, "html.parser")
    except Exception as e:
        print(f"Failed to get {url}. Error: {e}")
        return None

def get_amazon_data(search_text):
    search_text = "iphone 15 pro max"

    url = f'https://www.amazon.in/s?k={search_text}&ref=nb_sb_noss_2'


    soup = get_soup(url)

    for product in soup.findAll('div', class_="a-section a-spacing-small a-spacing-top-small"):
        name = product.find('span', class_="a-size-medium a-color-base a-text-normal")
        price = product.find('span', class_="a-offscreen")
        rating = product.find('span', class_="a-icon-alt")
        rating_count = product.find('span', class_="a-size-base s-underline-text")
        if price and name and rating and rating_count:
            print(name.text)
            print(price.text)
            print(rating.text)
            print(rating_count.text)

def get_flipkart_data(search_text=""):
    search_text = "iphone 15 pro max"

    url = f'https://www.flipkart.com/search?q={search_text}'

    soup = get_soup(url)

    for product in soup.findAll('div', class_="_2kHMtA"):
        name = product.find('div', class_="_4rR01T")
        price = product.find('div', class_="_30jeq3 _1_WHN1")
        rating = product.find('div', class_="_3LWZlK")
        rating_count = product.find('span', class_="_2_R_DZ")
        if price and name and rating and rating_count:
            print(name.text)
            print(price.text)
            print(rating.text)
            print(rating_count.text)

def get_myntra_data(search_text=""):
    search_text = "puma smurfs shoes"

    url = f'https://www.myntra.com/{search_text}'

    soup = get_soup(url)
    # print(soup.get_text())
    products = soup.findAll('h4', class_="products-product")
    print(products)
    for product in soup.findAll('li', class_="product-base"):
        name = product.find('h4', class_="product-product")
        print("helloooo", name.text)
        # price = product.find('div', class_="product-price")
        # rating = product.find('div', class_="product-rating")
        # rating_count = product.find('div', class_="product-ratingCount")
        # if price and name and rating and rating_count:
        #     print(name.text)
        #     print(price.text)
        #     print(rating.text)
        #     print(rating_count.text)

# get_flipkart_data()


def get_jiomart_data(search_text=""):
    search_text = "iphone 15 pro max"
    url = f'https://www.jiomart.com/search/{search_text}'

    soup = get_soup(url)
    products = soup.findAll('div', class_='plp-card-container')
    print(products)
    for product in products:
      price = product.find('div', class_='plp-card-details-price-wrapper ')
      print(price.text)
        



# get_jiomart_data()
get_flipkart_data()
        