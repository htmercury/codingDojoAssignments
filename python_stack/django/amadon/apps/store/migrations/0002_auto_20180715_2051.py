# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-07-16 01:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='Transaction',
        ),
    ]
