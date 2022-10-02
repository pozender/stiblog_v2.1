
from django.urls import path, include
from blog import views

urlpatterns = [
    
    path('', views.articles),
    path('article/<int:pk>/', views.article),
]