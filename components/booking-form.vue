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
          <option name="default none"></option>
          <option name="Residential Suite">Residential Suite</option>
          <option name="Suite">Suite</option>
          <option name="Junior Suite">Junior Suite</option>
          <option name="SingleRoom">Single Room</option>
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
      <p>
        Selected Room Number: 
      </p>
    </div>
    <div class="results-container">
      <RoomsDisplay :isSearching="isSearching || dateError" />
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
      inputsSelected: false,
      isSearching: false,
      dateError: false,
      availRooms: [],
      queryMatch: [],
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
      this.checkForDateError()
      this.inputsSelected = true
      this.isSearching = true 
      this.availRooms = []
      const checkinDate = this.checkinInput.split('-')[1] + '-' + this.checkinInput.split('-')[2] + '-' + this.checkinInput.split('-')[0]
      const bookedRooms = this.allBookings.filter(bk => bk.date === checkinDate)
      this.allRooms.map(rm => {
        const checker = bookedRooms.find(br => br.roomNumber === rm.number)
        if (!checker) {
          this.availRooms.push(rm)
        }
      })
      this.availRooms.map(rm => {
        if (rm.split('').length > 1) {
          rm.roomType.split(' ').map(w => w[0].toUpperCase() + w.substring(1, w.length)).join(' ')
        } else {
          rm.roomType.split('').map(w => w[0].toUpperCase() + w.substring(1, w.length)).join('')
        }
       })
    },
    clearSearch() {
      this.inputsSelected = false
      this.isSearching = false 
      this.$emit('search', false)
      this.checkinInput = ''
      this.selectedType = ''
    },
    checkForDateError() {
      const today = new Date();
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const dd = String(today.getDate()).padStart(2, '0')
      const yyyy = String(today.getFullYear())
      const checkDate = mm + '-' + dd + '-' + yyyy
      const checkMonth = checkDate.split('-')[0]
      const checkDay = checkDate.split('-')[1]
      const checkYear = checkDate.split('-')[2]
      const inputFormat = this.checkinInput.split('-')
      const errorMonth = inputFormat[1]
      const errorDay = inputFormat[2]
      const errorYear = inputFormat[0]
      if (checkYear < errorYear || (checkMonth < errorMonth && checkYear <= errorYear) || (errorDay < checkDay && checkYear <= errorYear)) {
        this.dateError = true
        // this.checkinInput = ''
        // this.selectedType = ''
        // this.inputsSelected = false
        // this.isSearching = false
        setTimeout(this.errorTimeout, 3000)
        return
      }
    },
    errorTimeout() {
      this.dateError = false
      this.checkinInput = ''
      this.selectedType = ''
      this.inputsSelected = false
      this.isSearching = false
    }
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
.booking-info-display {
  font-size: 18px;
  margin-top: 25px;
  margin-left: 18%;
}
</style>