<template>
  <div>

    <header class="king-room-header">
      <NuxtLink to="/dashboard" class="home-link">
        Home
      </NuxtLink>
      <h1 class="king-room-detail-heading">
        Overlook's Stunning Residential Suite
      </h1>
      <p class="king-sub">
        So luxurious you will never want to leave
      </p>
    </header>

    <div class="king-room-info-area">
      <div class="king-room-detail-text">
        <p>
          Our Resisdential Suites provide luxury comforts fit for a Royal. These quarters are intricately decordated and include:
          <ul>
            <li>24hr room service with access to full restaraunt menu and cocktails</li>
            <li>One and a half baths</li>
            <li>Sitting room</li>
            <li>Views of Overlook's beautiful garden maze</li>
          </ul> 
        </p>
        <p>
          Come experience luxury in our Residential Suite. Book now! You will want to become a permanent resident, indeed. 
        </p>
      </div>
      <div class="king-detail-image-container">
        <!-- <img src="../static/residential_suite.jpeg" id="resImage"/> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.king-room-header {
  font-size: 18px;
  background-color: #660000;
  padding-bottom: 2px;
  color: #FFFACD;
  margin: 0;
}
.king-room-detail-heading {
  text-align: center;
}
.king-sub {
  font-size: 22px;
  text-align: center;
}
.home-link {
  color: #FFFACD;
  margin-left: 25px;
}
.king-room-info-area {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  height: 79vh;
  background-color: #FFFACD;
}
.king-detail-image-container {
  border: 3px solid #660000;
  border-radius: 1rem;
  content: url("../static/residential_suite.jpeg");
}
.king-room-detail-text {
  width: 24vw;
  font-size: 20px;
}
</style>