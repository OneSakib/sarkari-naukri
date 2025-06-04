from .models import TopBar
from rest_framework import serializers


class TopBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopBar
        fields = ['title', 'link']
        read_only_fields = ['id']
