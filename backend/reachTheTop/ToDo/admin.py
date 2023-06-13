from django.contrib import admin
from .models import *

class TodoAdmin(admin.ModelAdmin):
    pass

class SkillAdmin(admin.ModelAdmin):
    pass

admin.site.register(Todo, TodoAdmin)
admin.site.register(Skill, SkillAdmin)