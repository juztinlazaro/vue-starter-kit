<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <h1 class="mb-5">Invite a Member</h1>
      </b-col>
    </b-row>

    <!-- <textarea placeholder="Press ctrl+v to Paste the copied text" rows="5" cols="20"></textarea> -->

    <b-row>
      <b-col cols="12" offset-md="1" md="10">
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col sm="12">
                <i class="fa fa-send bg-primary circle-icon mr-3 float-left"></i>
                <h4 class="card-heading mt-2">Send Invitation</h4>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p>Copy the message below with your referral link and email it to someone you want to invite to your team.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12" offset-md="2" md="8">
                <div class="referral-msg" id="referral-msg">
                  <p :style="{ 'font-size': '16px' }">Hi, Justin</p>
                  <p :style="{ 'font-size': '14px' }">Im inviting you to join my Ducatus Team. Click the link to register an account.</p>
                  <a href="https://www.swissmine.club/register/ronnel_012345" :style="{ 'font-size': '14px' }"><u><b>https://network.ducatus.net/register/ronnel_012345</b></u></a>
                  <br><br>
                  <p>Can't wait for you to join my team.</p>
                  <p>Thanks!</p>
                  <p>- <b>Ronnel</b></p>
                </div>
                <button class="btn btn-primary btn-block mb-2" id="button1" @click="CopyToClipboard('referral-msg')">
                  <i class="fa fa-copy"></i>
                  Copy Message
                </button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>


<script>
export default {
  methods: {
      CopyToClipboard(containerid) {
      if (document.selection) { 
        let range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy"); 
        window.getSelection().removeAllRanges()
      } else if (window.getSelection) {
        let range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges()
      }}
    }
}
</script>
