<template>
<div>
    <!-- <div id="info">Olá {{ user }}, você está consultando com o doutor José</div> -->
    <img src="https://i.imgur.com/78aDXAv.png" class="img-fluid w-100 d-none d-md-block" alt="">
    <img src="https://i.imgur.com/I5jZClF.png" class="img-fluid w-100  d-md-none" alt="">
  </div>
  
</template>

<script>
export default {
    data() {
        return{
            user: '%user%',
            nome: '%user%'
        }
    },
       created: function() {
            //  this.$http.get('https://sheet.best/api/sheets/133b59dc-be00-49a7-9008-31f07c8987ac')
            //     .then(res => {
            //         const body = res.body;
            //         console.log(body);
            //          let motorista =  body.filter((moto) => {
            //             return moto.whatsapp == 'whatsapp:+5511952740005';
            //             });

            //             this.user = motorista[0].name
            //             console.log(motorista);
            //     })
            //     .catch((error) => console.log(error));
    },
     methods: {
    }
}
</script>
<style lang="scss">
iframe{
    display: block !important;
    height: 100vh!important;
    width: 100vw !important;
    border: 0 !important;
    right: 0!important;
    top: 0!important;
    bottom: 0!important;
    left: 0!important;
}
#info{
    height: 66px;
    padding: 0 40px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

}
</style>