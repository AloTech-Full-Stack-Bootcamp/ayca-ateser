# Generated by Django 3.2.8 on 2021-12-15 16:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_comment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='comments_count',
        ),
        migrations.RemoveField(
            model_name='post',
            name='likes_count',
        ),
    ]
