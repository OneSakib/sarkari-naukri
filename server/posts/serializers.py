from .models import TopBar
from rest_framework import serializers


class TopBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopBar
        fields = ['title_1', 'link_1', 'title_2', 'link_2', 'title_3', 'link_3', 'title_4', 'link_4',
                  'title_5', 'link_5', 'title_6', 'link_6', 'title_7', 'link_7', 'title_8', 'link_8']
        read_only_fields = ['id']
