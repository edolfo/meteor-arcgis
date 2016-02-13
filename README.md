# meteor-arcgis

### Installation with Vagrant
1. `vagrant up`
2. `vagrant ssh`
3. `curl https://install.meteor.com/ | sh`
4. `cd /vagrant`
5. `meteor create app`
6. Now we need to move the `.meteor` directory inside `/vagrant/app`.  This is because the `/vagrant` directory is
a shared directory, and there exists a `mongoDB` installation inside of `/vagrant/app/.meteor`, which will be unable
to obtain a lock on the mongo file.
7. `cd app`
8. `mv /vagrant/app/.meteor ~/app`
9. `ln -s ~/app .meteor`
10. `meteor`

This should get the base app up and running

### Installation without Vagrant
1. `meteor app`
