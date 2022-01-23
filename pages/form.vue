<template>
    <div class="row h-100 px-0 px-sm-0">
        <div class="col-xl-6 pt-3">
            <form class="contact1-form validate-form">
<span class="contact1-form-title">
Get in touch
</span>
                <div class="wrap-input1 validate-input" data-validate="Name is required">
                    <input class="input1" type="text" name="name" placeholder="Name">
                    <span class="shadow-input1"></span>
                </div>
                <div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input1" type="text" name="email" placeholder="Email">
                    <span class="shadow-input1"></span>
                </div>
                <div class="wrap-input1 validate-input" data-validate="Subject is required">
                    <input class="input1" type="text" name="subject" placeholder="Subject">
                    <span class="shadow-input1"></span>
                </div>
                <div class="wrap-input1 validate-input" data-validate="Message is required">
                    <textarea class="input1" name="message" placeholder="Message"></textarea>
                    <span class="shadow-input1"></span>
                </div>
                <div class="container-contact1-form-btn">
                    <button class="contact1-form-btn">
<span>
Send Email
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</span>
                    </button>
                </div>
            </form>
        </div>
        <SidebarRight :posts="posts" class="col-12 col-xl-6 mt-3 mt-xl-0 ls"/>
    </div>
</template>
<style>


/*//////////////////////////////////////////////////////////////////
[ Contact 1 ]*/

.contact1 {
    width: 100%;
    min-height: 100%;
    padding: 15px;

    background: #009bff;
    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
    background: -o-linear-gradient(left, #0072ff, #00c6ff);
    background: -moz-linear-gradient(left, #0072ff, #00c6ff);
    background: linear-gradient(left, #0072ff, #00c6ff);

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.container-contact1 {
    width: 1163px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    padding: 90px 130px 88px 148px;
}

/*------------------------------------------------------------------
[  ]*/
.contact1-pic {
    width: 296px;
}

.contact1-pic img {
    max-width: 100%;
}


/*------------------------------------------------------------------
[  ]*/
.contact1-form {
    width: 390px;
}

.contact1-form-title {
    display: block;
    font-family: Montserrat-ExtraBold;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 44px;
}

input.input1 {
    height: 50px;
    border-radius: 25px;
    padding: 0 30px;
}
input.input1 + .shadow-input1 {
    border-radius: 25px;
}

textarea.input1 {
    min-height: 150px;
    border-radius: 25px;
    padding: 12px 30px;
}
textarea.input1 + .shadow-input1 {
    border-radius: 25px;
}

/*---------------------------------------------*/
.wrap-input1 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 20px;
}

.input1 {
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
}

.shadow-input1 {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(87,184,70, 0.5);
}

.input1:focus + .shadow-input1 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
    to {
        box-shadow: 0px 0px 80px 30px;
        opacity: 0;
    }
}

@keyframes anim-shadow {
    to {
        box-shadow: 0px 0px 80px 30px;
        opacity: 0;
    }
}

/*---------------------------------------------*/
.container-contact1-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.contact1-form-btn {
    min-width: 193px;
    height: 50px;
    border-radius: 25px;
    background: #57b846;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.contact1-form-btn i {
    margin-left: 7px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.contact1-form-btn:hover {
    background: #333333;
}

.contact1-form-btn:hover i {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
}
</style>