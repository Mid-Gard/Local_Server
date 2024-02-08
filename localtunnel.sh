#!/bin/bash 
until lt --port 8000 --subdomain amga-monorepo-starter-api
do
  echo "Try again"
done
