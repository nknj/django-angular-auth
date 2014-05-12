from django.conf.urls import patterns, include, url

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'backend.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^api/register/$', 'auth.views.register'),
    url(r'^api/login/$', 'auth.views.login'),
    url(r'^api/logout/$', 'auth.views.logout'),
    url(r'^api/username/$', 'auth.views.get_username'),
    url(r'^admin/', include(admin.site.urls)),
)
