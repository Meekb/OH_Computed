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
          v-model="selectedType" 
          class="dropdown" 
          required
        >
          <option name="default none" value="default none"></option>
          <option name="Residential Suite" value="residential suite">Residential Suite</option>
          <option name="Suite" value="suite">Suite</option>
          <option name="Junior Suite" value="junior suite">Junior Suite</option>
          <option name="Single" value="single">Single Room</option>
        </select>
      </label>
    </div>
    <div class="search-btn-container">
      <button v-show="!isSearching || (dateError && !isSearching)" @click="checkAvailability" class="search-btn" :disabled="!checkinInput || !selectedType">
        Check Availability
      </button>
      <button v-show="isSearching && !dateError" @click="clearSearch" class="clear-btn">Clear Search</button>
    </div>
    <p v-show="dateError">Please select valid check-in date!</p>
    <div v-show="inputsSelected && !dateError" class="booking-info-display">
      <p>
        Name: {{ fullName }}
      </p>
      <p>
        Room Type: {{ selectedType }}
      </p>
      <p>
        Check-in Date: {{ checkinDisplay }}
      </p>
      <p v-show="selectedRoom">
        Selected Room Number: {{ selectedRoom }}
      </p>
      <p v-show="receipt">
        Your total will be: {{ receiptTotal }}
      </p>
      <button v-show="receipt" class="confirm-btn">
        Confirm
      </button>
      <button v-show="receipt" class="cancel-btn" @click="clearSearch">
        Cancel
      </button>
    </div>
    <div class="results-container" v-show="!dateError">
      <RoomsDisplay v-show="!receipt" :isSearching="isSearching" :queryMatch="queryMatch" @selected-room="setSelectedRoom" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    allRooms: {
      type: Array,
      default: [],
    },
    allBookings: {
      type: Array,
      defailt: [],
    },
  },
  data() {
    return {
      checkinInput: '',
      selectedType: '',
      selectedRoom: null,
      inputsSelected: false,
      dateError: false,
      availRooms: [],
      queryMatch: [],
      isSearching: false,
      receipt: false,
      receiptTotal: null,
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    checkinDisplay() {
      const display = this.checkinInput.split('-')
      return `${display[1]}-${display[2]}-${display[0]}`
    },
  },
  methods: {
    checkAvailability() {
      // checks that input date is valid
      this.checkForDateError()
      this.inputsSelected = true
      this.isSearching = true 
      // find all available rooms and store them in this.availRooms array
      this.availRooms = [] 
      const checkinDate = this.checkinInput.split('-')[1] + '-' + this.checkinInput.split('-')[2] + '-' + this.checkinInput.split('-')[0]
      const bookedRooms = this.allBookings.filter(bk => bk.date === checkinDate)
      this.allRooms.map(rm => {
        const checker = bookedRooms.find(br => br.roomNumber === rm.number)
        if (!checker) {
          this.availRooms.push(rm)
        }
      })
      const matches = this.availRooms.filter(rm => rm.roomType === this.selectedType)
      this.queryMatch = matches
    },
    clearSearch() {
      this.inputsSelected = false
      this.isSearching = false 
      this.$emit('search', false)
      this.checkinInput = ''
      this.selectedType = ''
      this.selectedRoom = null
      this.receipt = false
    },
    checkForDateError() {
      const today = new Date();
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const dd = String(today.getDate()).padStart(2, '0')
      const yyyy = String(today.getFullYear())
      // todays date mm-dd-yyyy
      const checkDate = mm + '-' + dd + '-' + yyyy
      const month = checkDate.split('-')[0]
      const day = checkDate.split('-')[1]
      const year = checkDate.split('-')[2]
      // cust input mm-dd-yyyy
      const inputFormat = this.checkinInput.split('-')
      const inputMonth = inputFormat[1]
      const inputDay = inputFormat[2]
      const inputYear = inputFormat[0]
      // check for date errors
      if ((inputYear < year) || (inputMonth === month && inputDay < day)) {
        this.dateError = true
        setTimeout(this.errorTimeout, 2000)
      }  
      // else do nothing for now
      return
    },
    errorTimeout() {
      this.dateError = false
      this.checkinInput = ''
      this.selectedType = ''
      this.inputsSelected = false
      this.isSearching = false
    },
    setSelectedRoom(payload) {
      this.isSearching = false
      this.receipt = true
      this.selectedRoom = payload.room
      this.receiptTotal = payload.cost
    },
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
  height: 81vh;
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
  color: #660000;
  border: 2px solid #660000;
}
.clear-btn {
  margin-top: 25px;
  margin-left: 25px;
  border-radius: 1rem;
  font-size: 18px;
  color: #660000;
  border: 2px solid #660000;
}
.confirm-btn,
.cancel-btn {
  font-size: 18px;
  border-radius: 1rem;
}
.cancel-btn {
  margin-left: 65px;
}
.booking-info-display {
  font-size: 18px;
  margin-top: 25px;
  margin-left: 18%;
}
</style>