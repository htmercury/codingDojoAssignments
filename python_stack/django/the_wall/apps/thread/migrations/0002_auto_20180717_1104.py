# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-07-17 16:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('thread', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='comments',
            new_name='commenters',
        ),
    ]