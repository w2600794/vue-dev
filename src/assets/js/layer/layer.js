// 弹窗
import "@/assets/js/layer/layer.less";
export const layer = function(msg,options,yesFun,calcelFun,btn) {
    var layer = {
        msg: msg,
        options: options,
        init: function() {
            this.teml();
        },
        teml: function() {
            var node=document.createElement("div");
            node.setAttribute('class','layer-warp');
            node.innerHTML+= '<div class="layer-box"><div class="layer-conent">'+msg+'</div><div class="layer-btns"><button class="calcel" type="button">取消</button><button class="yes" type="button">'+(btn!=null||btn!=undefined?btn:'确定')+'</button></div></div>';
            document.querySelector("body").appendChild(node)
            this.yes();
            this.calcel();
        },
        yes: function() {    // 确定
            var yes = document.querySelector('.yes');
            yes.onclick = function() {
                var layer = document.querySelector('.layer-warp')
                document.querySelector("body").removeChild(layer)
                yesFun();
            }
        },
        calcel: function() {   // 取消
            var calcel = document.querySelector('.calcel');
            calcel.onclick= function() {
                var layer = document.querySelector('.layer-warp')
                document.querySelector("body").removeChild(layer)
                calcelFun()
            }
        }
    }
    layer.init();
}

export const layerPop = function(msg,cb,second) {
    var layerPop ={
        msg: msg,
        init() {
            this.teml();
        },
        teml() {
            var node=document.createElement("div");
            node.setAttribute('class','layerPop-warp');
            node.innerHTML+= '<div class="layer-box"><div class="layer-conent">'+msg+'</div></div>';
            document.querySelector("body").appendChild(node);
            setTimeout(function(){
                var layer = document.querySelector('.layerPop-warp');
                document.querySelector("body").removeChild(layer);
                cb&&cb();
            },second===undefined?3000:second)
        }
    }
    layerPop.init();
}
