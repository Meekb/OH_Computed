<template>
  <div class="booking-container">
    <div class="calender-selector">
      <label>
        Check-in Date:
        <input type="date" class="calendar" v-model="checkinInput" />
      </label>
      <label class="select-text">
        Select Room Type:
        <select 
          v-model="roomType" 
          class="dropdown" 
          required
        >
          <option name="default none"></option>
          <option name="Residential Suite">Residential Suite</option>
          <option name="Suite">Suite</option>
          <option name="Junior Suite">Junior Suite</option>
          <option name="SingleRoom">Single Room</option>
        </select>
      </label>
    </div>
    <div class="search-btn-container">
      <button class="search-btn" :disabled="!checkinInput || !roomType">
        Check Availability
      </button>
    </div>
    <div class="rooms-display-container">
      <RoomsDisplay :selected="inputsSelected"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkinInput: '',
      checkinDisplay: '',
      roomType: '',
      inputsSelected: false,
    }
  },
  methods: {
    // async formatCheckinDisplay() {
    //   const newFormat = await this.checkinInput.split('-')
    //   const dateDisplay = `${newFormat[1]}-${newFormat[2]}-${newFormat[0]}`
    //   console.log(this.checkinDisplay)
    //   return this.checkinDisplay = dateDisplay
    // }
  }
}
</script>

<style scoped>
label {
  font-size: 20px;
}
input {
  font-size: 18px;
}
select {
  font-size: 18px;
}
.booking-container {
  background-color: #FFFACD;
  width: 100%;
}
.calender-selector {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 25px;
}
.calendar {
  margin-right: 20px;
}
.checkin-display {
  font-size: 20px;
  margin-left: 20px;
}
.search-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-btn {
  margin-top: 25px;
  margin-left: 25px;
  border-radius: 1rem;
  font-size: 18px;
  color: #FFFACD;
  background-color: #a76d40;
  border: 2px solid #660000;
}
</style>