document.body.oncopy=function(){iziToast.info({timeout:4000,closeOnEscape:'true',transitionIn:'bounceInLeft',transitionOut:'fadeOutRight',displayMode:'replace',layout:'2',position:'topRight',iconUrl:'https://image-1309791158.cos.ap-guangzhou.myqcloud.com/其他/1122star.svg',backgroundColor:'#00ffce',color:'#000000',title:'复制成功',message:'复制原创内容后请注明来源'})};var top_box=document.querySelector(".post-list .post");var top_div="<div id=\"bber-talk\"></div>";if(window.location.href===window.location.origin+"/"){top_box.insertAdjacentHTML("beforebegin",top_div);document.addEventListener("DOMContentLoaded",()=>{var bbUrl="https://say.inetgeek.cn/api/memo?creatorId=1&rowStatus=NORMAL"fetch(bbUrl).then(res=>res.json()).then(resdata=>{var result='',resultAll="",data=resdata.data for(var i=0;i<data.length;i++){var bbTime=new Date(data[i].createdTs*1000).toLocaleString()var bbCont=data[i].content var newbbCont=bbCont.replace(/(https?:[^:<>"]*\/)([^:<>"]*)(\.((png!thumbnail)|(png)|(jpg)|(webp)|(jpeg)|(gif))(!blogimg)?)/g,' 🌅 ').replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|jfif|gif))\S+/g,'👉')result+=`<li class="item">🔔<span class="datetime">${bbTime}</span>：<a href="https://blog.inetgeek.cn/talks/">${newbbCont}</a></li>`}var bbDom=document.querySelector('#bber-talk');var bbBefore=`<div class="talk-wrap"><ul class="talk-list">`var bbAfter=`</ul></div>`resultAll=bbBefore+result+bbAfter bbDom.innerHTML=resultAll;window.Lately&&Lately.init({target:'.datetime'})});setInterval(function(){for(var s,n=document.querySelector(".talk-list"),e=n.querySelectorAll(".item"),t=0;t<e.length;t++)setTimeout(function(){n.appendChild(e[0])},1000)},1000)})}