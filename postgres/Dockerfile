FROM postgres:10
RUN localedef -i fi_FI -c -f UTF-8 -A /usr/share/locale/locale.alias fi_FI.UTF-8
ENV LANG fi_FI.utf8
#RUN useradd -m docker_postgres
#RUN mkdir /volume_data
#RUN chown docker_postgres /volume_data
#USER docker_postgres
