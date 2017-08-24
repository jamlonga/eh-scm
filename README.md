# eh-scm
### Setting
##Cassandra
1. Install docker
2. Add docker compose file with

cassandra:
  image: cassandra:latest
  ports:
    - "7000:7000"
    - "7001:7001"
    - "9160:9160"
    - "9042:9042"
    - "7199:7199"
  command: /bin/bash -c "sleep 1 && echo ' -- Pausing to let system catch up ... -->' && /docker-entrypoint.sh cassandra -f"

3. Run docker-compose up
