<template>
  <div>
    <!-- <img class="group-photo" src="../assets/images/GroupPhoto.jpg" alt=""> -->
    <section class="mod-01">
      <div class="container">
        <p>Welcome to the ISWEE 2020 | Beijing, China</p>
        <p>
        2020 International Symposium on Water, Ecology and Environment 
        </p>
        <p>
          December 6th-8th
        </p>
      </div>
    </section>

    <div class="page-title clearfix container">
      <h1><strong>Welcome to ISWEE 2020!</strong></h1>
    </div>

    <div class="container">
      2020 International Symposium on Water, Ecology and Environment (ISWEE 2020) will be held in Beijing, China from December 6th to 8th, 2020.<br/><br/>

      ISWEE 2020 aims to provide an international forum for academics, scientists, experts from all over the world in the field of water, ecology and environment to exchange the latest ideas, theoretical and practical research findings. The program will include keynote speeches, invited speeches, oral presentations and poster session. It is with great pleasure that we invite you to attend this symposium.<br/><br/>

      We cordially invite you to join us in Beijing, China!
  
    </div>


    <div class="container tabs-container">

      <ul class="tabs-wrapper fix">
        <li class="fl">
          <h3>
            <span class="dropcapspot">1</span>
            Important Dates
          </h3>
          <p class="important-dates">
          <span> Submission Deadline for Full Paper/Abstract: October 15, 2020</span<br />
          <span> Early Registration Deadline: November 1, 2020</span<br />
          <span> Notification Date: About 1 week after submission</span<br />
          <span>  Conference Period: December 6-8, 2020</span<br />
           
           
          

          </p>
        </li>

        <li class="fl">
          <h3>
            <span class="dropcapspot">2</span>
            Login System
          </h3>
          <div class="anniu">
            <div class="anniu_x">
                <div class="an_l" >
                <br>
                  <a href="http://paper.academicconf.com/author/login.aspx?confname=icbeb2020" target="_blank" style="color:#fff;">Submission System (Author Login)</a>
                </div>
                <br />
            </div>
            <div class="anniu_x">
              <div class="an_2">
                <a href="http://paper.academicconf.com/expert/ExpertLogin.aspx?confname=icbeb2020" target="_blank" style="color:#fff;">
                  Review System (Reviewer Login)
                </a>
              </div>
            </div>
          </div>
        </li>

        <li class="fl">
          <h3>
            <span class="dropcapspot">3</span>
            Files Download
          </h3>
          <p class="files-download">
            <span>1. <a href="file/Abstract Template.doc" target="_blank">Abstract Template</a></span><br />
            <span>2. <a href="file/ICBEB 2020-Registration Form.xlsx" target="_blank">Registration Form</a></span><br />
            <span>3. <a href="file/ICBEB 2020-Poster Template.pptx" target="_blank">Paper Template</a></span><br/>
            <span>4. <a href="file/ICBEB 2020-CFP.pdf" target="_blank">CFP Brochure</a></span>
          </p>
        </li>
      </ul>
    </div>

    <div class="container">
      <div class="page-title clearfix">
        <h1><strong>Publication guidelines</strong></h1>
      </div>

      <ul class="book-list">
        <li class="fix">
          <img class="fl" src="../assets/images/book_01.jpg" alt="">
          <div class="introduction fr">
            <p class="title">Environmental Science and Pollution Research(Springer)</p>
            <p>ISSN:0944-1344(Print) 1614-7499(Online)</p>
            <p>JCR Impact factor:2.914</p>
            <p>Publication Type: Special issue</p>
            <p>Indexed in: AGRICOLA, Google Scholar, Institute of Scientific and Technical Information of China, Journal Citation Reports/Science Edition, etc.</p>
          </div>
        </li>
        <li class="fix">
          <img class="fl" src="../assets/images/book_02.png" alt="">
          <div class="introduction fr">
            <p class="title">Environmental Technology(Taylor & Francis)</p>
            <p>ISSN:0959-3330(Print) 1479-487X(Online)</p>
            <p>JCR Impact factor: 1.918</p>
            <p>Publication Type: Special issue</p>
            <p>Indexed in: Current Contents-AGRICULTURE, BIOLOGY & ENVIRONMENTAL SCIENCES BIOLOGICAL ABSTRACTS, etc.</p>
          </div>
        </li>
        <li class="fix">
          <img class="fl" src="../assets/images/book_03.jpg" alt="">
          <div class="introduction fr">
            <p class="title">Journal of Coastal Research</p>
            <p>ISSN:0749-0208(Print) 1551-5036(Online)</p>
            <p>JCR Impact factor: 1.053</p>
            <p>Publication Type: Special issue</p>
            <p>Indexed in: BIOLOGICAL ABSTRACTS, BIOSIS PREVIEWS, Current Contents-AGRICULTURE, Chemical & Earth Sciences, etc.</p>
          </div>
        </li>
        <li class="fix">
          <img class="fl" src="../assets/images/book_04.png" alt="">
          <div class="introduction fr">
            <p class="title">Applied Ecology and Environmental Research</p>
            <p>ISSN: 1589-1623(Online)</p>
            <p>JCR Impact factor: 0.721</p>
            <p>Publication Type: Special issue</p>
            <p>Indexed in: Zoological Record, SCIE (Science Citation Index Expanded), BIOSIS PREVIEWS BIOLOGICAL ABSTRACTS ,etc.</p>
          </div>
        </li>
      </ul>
        <span style="color:#0e73b7">* More SCI journals related to ISWEE 2020 General Topics, please contact the organizing committee.</span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.group-photo {
  width: 100%;
}
/*首页内容*/
.mod-01{
  width: 100%;
  min-width: 1200px;
  height: 130px;
  padding-top: 20px;
  margin-bottom: 50px;
  margin-top: 0px;
  background: url("../assets/images/bg_1.jpg") center bottom no-repeat;
  background-size: cover;
  line-height: 34px;
  font-family: "宋体", Helvetica, Arial, sans-serif;
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
.mod-02{
  line-height: 26px;
  font-size: 16px;
  color: #4c4c4c;
}
.mod-02 img{
  display: block;
  max-width: 100%;
}

.book-list {
  width: 100%;
}
.book-list li {
  width: 45%;
  display: inline-block;
  margin-bottom: 20px
}
.book-list li:nth-child(2n - 1) {
  margin-right: 5%;
}
.introduction {
  display: inline-block;
  width: calc(100% - 174px);
  margin-left: 10px;
}
.introduction p {
  line-height: 24px;
}
.introduction p.title {
  color: #1e8cd5;
}
</style>
