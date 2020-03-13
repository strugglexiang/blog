# 修改root密码
0jUrx8QEkCU2q8Jb47
sudo  passwd root


# 防火墙
查看防火墙状态,running表示防火墙开启
```
systemctl status firewalld.service
```

执行关闭命令
```
systemctl stop firewalld.service
``` 

再次执行查看防火墙命令
```
systemctl status firewalld.service
```

执行开机禁用防火墙自启命令
```
systemctl disable firewalld.service
```

# 安装bbr
```
// 脚本安装bbr
// 安装成功后需要重启
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```

- 安装成功后执行`uname -r`，显示`4.14.129-bbrplus`则切换内核成功
- 执行`lsmod | grep bbr，显示有bbrplus则开启成功


# 安装v2Ray
1. 下载一键脚本
```
yum install -y wget
wget https://install.direct/go.sh
```

2. 执行安装
```
bash go.sh
```
此脚本会安装以下文件  
* /usr/bin/v2ray/v2ray：V2Ray 程序
* /usr/bin/v2ray/v2ctl：V2Ray 工具
* /etc/v2ray/config.json：配置文件
* /usr/bin/v2ray/geoip.dat：IP 数据文件
* /usr/bin/v2ray/geosite.dat：域名数据文件

## v2Ray常用命令
* service v2ray start #启动V2Ray服务
* service v2ray stop #停止V2Ray服务
* service v2ray status #查看V2Ray服务状态
* service v2ray reload #重载V2Ray配置文件
* service v2ray restart #重启V2Ray服务

## v2Ray服务器配置
```
{
    "inbounds": [
        {
            "port": 50080,  //自定义端口号
            "listen": "127.0.0.1",
            "protocol": "vmess",  //采用vmess协议
            "settings": {
                "clients": [
                    {
                        "id": "4346de4e-6224-4f02-a388-134c2e3aead9", //UUID,安装V2Ray成功后，会默认生成一个，也可以通过在线网站https://www.uuidgenerator.net/生成
                        "alterId": 4 //额外ID，[1,64]均可,值会大,效率越低
                    }
                ]
            },
            "streamSettings": {
                "network": "ws",  //采用WebSocket协议
                "wsSettings": {
                    "path": "/ray"  //自定义WS路径，Nginx配置时用
                }
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "freedom",
            "settings": {}
        }
    ],
    "routing": {
        "rules": [
            {
                "type": "field",
                "ip": [
                    "geoip:private"
                ],
                "outboundTag": "blocked"
            }
        ]
    }
}
```


# 安装nginx
```
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```
```
yum install -y nginx
```
文件位置
```
/usr/share/nginx/
```


# tls证书
安装acme.sh
```
curl  https://get.acme.sh | sh
```

生成证书,证书是会自动更新的
```
// yum install -y socat
sudo ~/.acme.sh/acme.sh --issue -d www.knowwo.tk --standalone -k ec-256
```

手动更新 ECC 证书
```
$ sudo ~/.acme.sh/acme.sh --renew -d www.knowwo.tk --force --ecc
```

如果是 RSA 证书
```
sudo ~/.acme.sh/acme.sh --renew -d www.knowwo.tk --force
```



#nginx配置v2ray转发
## 创建Nginx-V2Ray配置文件
在/etc/nginx/conf.d目录, 创建v2ray.conf配置文件
## v2ray.conf 配置参数
```
server {
   listen 443 ssl;
   # ssl on; # 这行出错可去除
   ssl_certificate       /.acme.sh/www.knowwo.tk_ecc/www.knowwo.tk.cer;   #acme.sh生成的证书路径
   ssl_certificate_key   /.acme.sh/www.knowwo.tk_ecc/www.knowwo.tk.key;   #acme.sh生成的证书路径
   ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
   ssl_ciphers           HIGH:!aNULL:!MD5;
   server_name           www.knowwo.tk;   #证书绑定的域名
     location /ray { # 与 V2Ray 配置中的 path 保持一致
       proxy_redirect off;
       proxy_pass http://127.0.0.1:50080; # 端口与 V2Ray 配置中的 port 保持一致
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "upgrade";
       proxy_set_header Host $host;
       # Show real IP in v2ray access.log
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
配置后`nginx -s reload`重启nginx


## 附Nginx常用命令
```
nginx -t           #测试配置文件
nginx              #启动命令
nginx -s stop      #强制停止Nginx服务
nginx -s quit      #处理完请求后再停止服务
nginx -s reload    #重启命令
ps -ef |grep nginx #查看进程命令
nginx -v           #查看Nginx的版本号
```


# 参考
https://www.mingjinglu.com/coding/425.html
https://www.shawnlin.cn/v2ray/

