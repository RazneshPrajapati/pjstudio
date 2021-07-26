<template>
  <div class="d-flex col-12">
    <div class="col-6">
      <form @submit.prevent="validateForm">
        <div class="d-flex flex-column gap-3 col-12 p-4">
          <div class="h1 text-center">General Form</div>
          <div class="errorMessage">
            <Modal :errorMessage="errorMessage" v-if="errorMessage" />
          </div>
          <div class="d-flex flex-row justify-content-between col-12">
            <div class="d-flex flex-column col-4 pr-1">
              <BaseInputType
                v-model="event.firstName"
                label="First Name"
                id="firstName"
                type="text"
              />
            </div>
            <div class="d-flex flex-column col-4 px-1">
              <BaseInputType
                v-model="event.middleName"
                label="Middle Name"
                id="middleName"
                type="text"
              />
            </div>
            <div class="d-flex flex-column col-4 pl-1">
              <BaseInputType
                v-model="event.lastName"
                label="Last Name"
                id="lastName"
                type="text"
              />
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <div class="">
              <div class="">
                <label for="gender" class="label">Gender</label>
              </div>
              <div class="d-flex flex-row gap-3 col-6">
                <BaseInputRadio
                  type="radio"
                  v-model="event.gender"
                  :radioItems="radioItems"
                  name="gender"
                />
              </div>
            </div>

            <div class="d-flex flex-column col-6">
              <BaseInputType
                v-model="event.dob"
                label="Date of Birth"
                id="dob"
                type="date"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div for="" class="">Interest</div>
            <div class="d-flex align-items-center gap-4 col-12">
              <BaseInputCheckbox
                v-model="event.interest"
                :checkboxItems="checkboxItems"
                type="checkbox"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="">Work shift</div>
            <BaseSelect
              v-model="event.workShift"
              :workShiftItems="workShiftItems"
            />
          </div>

          <div class="d-flex col-12">
            <div class="d-flex flex-column col-6 input-pr">
              <BaseInputType
                v-model="event.email"
                label="Email"
                id="email"
                type="email"
              />
            </div>
            <div class="d-flex flex-column col-6">
              <BaseInputType
                v-model="event.contact"
                label="Contact"
                id="contact"
                type="tel"
              />
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex flex-column col-6 input-pr">
              <BaseInputType
                v-model="event.password"
                label="Password"
                id="password"
                type="password"
              />
            </div>
            <div class="d-flex flex-column col-6">
              <BaseInputType
                v-model="event.cPassword"
                label="Confirm Password"
                id="cPassword"
                type="password"
              />
            </div>
          </div>
          <div class="d-flex gap-3">
            <input type="submit" value="Submit" class="input-btn btn-submit" />
            <input
              type="button"
              value="Reset"
              @click="initializeValue"
              class="input-btn btn-reset"
            />
          </div>
        </div>
      </form>
    </div>
    <div
      class="
        col-6
        d-flex
        flex-column
        justify-content-start
        align-items-center
        gap-5
      "
    >
      <div class="h1 text-center">Debug</div>
      <div class="">
        <li class="" v-for="(value, index) in event" :key="index">
          {{ index }} : {{ value }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInputType from "@/components/BaseInputType.vue";
import BaseInputCheckbox from "@/components/BaseInputCheckbox.vue";
import BaseInputRadio from "@/components/BaseInputRadio.vue";
import Modal from "@/components/Modal.vue";

import FormValidator from "../utils/formValidator.ts";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  components: {
    BaseInputType,
    BaseInputCheckbox,
    BaseInputRadio,
    Modal,
    BaseSelect,
  },
  data() {
    return {
      radioItems: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
      ],
      checkboxItems: [
        { value: "frontend", label: "Frontend" },
        { value: "backend", label: "Backend" },
        { value: "qa", label: "QA" },
        { value: "ui/ux", label: "UI/UX" },
        { value: "projectManager", label: "Project Manager" },
      ],
      workShiftItems: ["Morning", "Day", "Evening", "Night"],
      event: {},
      errorMessage: "",
    };
  },

  created() {
    this.initializeValue();
  },

  methods: {
    validateForm() {
      const form = this.event;
      this.errorMessage = "";
      this.errorMessage = FormValidator(form);
    },

    submitForm() {
      if (!this.errorMessage) {
        alert("Submit form");
      }
    },

    initializeValue() {
      this.event = {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "male",
        dob: "",
        interest: [],
        workShift: "",
        email: "",
        contact: "",
        password: "",
        cPassword: "",
      };
    },
  },
};
</script>

<style>
@import "../styles/index.css";
.input-btn {
  padding: 6px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: 600;
}

.btn-submit {
  background-color: blue;
}
.btn-submit:hover {
  background-color: rgb(2, 2, 168);
}

.btn-reset {
  background-color: crimson;
}
.btn-reset:hover {
  background-color: rgb(155, 12, 40);
}

.errorMessage {
  height: 8vh;
}
</style>
