## docker commands

```bash
docker build -t meteor .
docker run --rm -it -v $(pwd):/app -w /app -p 3000:3000 meteor /bin/bash

# and then inside the container
meteor npm install --allow-superuser
meteor --allow-superuser
```
