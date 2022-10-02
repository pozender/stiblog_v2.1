from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Articles

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = '__all__'
            
        