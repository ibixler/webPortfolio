---
layout: default
title: Blog
---

<h2>Blog Posts</h2>

<ul>
{% for post in site.posts %}
    <li><a class="post-link" href="{{ post.url }}">{{ post.title}}</a>
    <span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
{% endfor %}
</ul>