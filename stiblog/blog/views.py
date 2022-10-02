from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from blog.models import Articles
from .serializer import ArticlesSerializer



# Create your views here.
@api_view(['GET','POST'])
def articles(request):
    if request.method == 'GET':
        
        articles = Articles.objects.all()
        serializer = ArticlesSerializer(articles, many = True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ArticlesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

@api_view(['GET', 'PUT'])
def article(request, pk):
    try:
        article = Articles.objects.get(pk=pk)
    except Articles.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ArticlesSerializer(article)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ArticlesSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)