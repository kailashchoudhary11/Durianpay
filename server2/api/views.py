from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .utils import get_amazon_data, get_flipkart_data, get_myntra_data

@api_view(['GET'])
def index(request):
  return Response("This is the index view")

class SearchView(APIView):
  def post(self, request):
    data = request.data
    search_text = data.get("searchTerm")
    amazon_data = get_amazon_data(search_text)
    flipkart_data = get_flipkart_data(search_text)
    return Response(amazon_data + flipkart_data)