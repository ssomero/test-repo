#!/bin/bash
# wait-for-postgres.sh

# set -e

# host="$1"
# shift
# cmd="$@"

# until psql -h "$host" -U "postgres" -c '\q'; do
#   >&2 echo "Postgres is unavailable - sleeping"
#   sleep 1
# done

# >&2 echo "Postgres is up - executing command"
# exec $cmd

set -e

host="$1"
shift
port="$1"
shift
cmd="$@"

retryCount=1
echo "Wait db host " $host
until nc -z $host $port; do
  >&2 echo "Wait for host: $host and port: $port to become available  - retry $retryCount"
  sleep 3

  retryCount=$(( $retryCount + 1))
  #if [ "$retryCount" -eq 10 ]
  #  then
  #      break
  #  fi
done

>&2 echo "Port $port is listening so executing command  $cmd"
exec $cmd
