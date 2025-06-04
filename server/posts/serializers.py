from .models import *
from rest_framework import serializers


class TopBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopBar
        fields = ['title', 'link']
        read_only_fields = ['id']


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['title', 'link']
        read_only_fields = ['id']
