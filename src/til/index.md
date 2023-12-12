---
title: 今天我学到了……
tags: map
layout: til.njk
---
<h1>今天我学到了……</h1>

{% for post in collections.til reversed %}
- <a href="{{ post.url }}">{{ post.data.title }}</a> --- {{ post.data.date | toDate }}
{% endfor %}