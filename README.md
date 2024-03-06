# How to run

1. Go in the BackEnd folder : ```cd BackEnd```
2. First activate the environment : ```source /home/uroot/BE_Project/Local_Server/local_server/bin/activate.fish```
3. Then Run the BackEnd Server : ```python manage.py runserver 0.0.0.0:8000```
> Verify the IP address of this server
4. Now if you cant make the server visible over the LAN with some frameworks like XAMPP, then fine, you have to put this ip address as the part of the API in the various sub-project components. 

Otherwise use NGROK to host the server on all internet.
5. Run the following to connect this PC to the NGROK server : ```ngrok http http://192.168.1.101:8000```


To create the remaining APIs, use the following doc : [Procedure by GPT](./BackEnd/ProcudureByGPT.md)

# Local_Server 

This porject inclues the codes and system configurations for setting up WebApp (Development will be happening in this repo itself), Database installation and hosting and for ML model deployment. For this we are using the PC from AC lab. The idea is to use a local PC for testing and setup and after sucessful deployment. The same can be replicated onto cloud servers or in docker environment as suitable.


### Few points to note
1. If you want to do any changes, clone the repo, create your own branch and then start the development. Nothing will be pushed directly in the main branch. Whoever will bring new feature in the Web App or the server backend, will need to explain it first to all members and the will merge it.
2. New branch is coming up with NextJS. The development will go parallely with the main branch which is under ReactJS.
3. Do not install anything on the PC over the table, which is being used to create the server. If any depency issue happens will need to do everything from scratch, as all the database, webapp and ML model will be deployed on it. Do not use it for testing any other work. Only log in to the GEC ETC standard user. Do not login into the uroot or Root User.


## Important Data
We are using the below online collaboration tools to desing the skeleton and UI of the webApp. Put your suggestions and ideas in the below online workspaces.
Weirframe (Structure of the website) : [Excalidraw](https://excalidraw.com/#room=f19ff3afd8e416e95810,tv_zFrb4YpiwFHOx7NKKgg)
UI Design : [Figma](https://www.figma.com/file/STlnToD2u2sJWXNBqOrJNi/BE-Project-WebApp-Design?type=design&node-id=0%3A1&mode=design&t=jV1s5RBNqQeq2uKV-1)



## ToDo
1. Need to create fresh NextJs branch and setup
2. Use playit.gg to host the webapp on internet
3. Create wireframe on Excalidraw
4. Create desing on Figma
