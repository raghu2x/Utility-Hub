<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="bg-gray-800 shadow-md shadow-gray-800 rounded text-white">
      <div class="mx-auto">
        <h3 class="text-lg font-semibold p-3 pb-0">EMI Calculator</h3>
        <form class="p-6">
          <div class="py-2 flex flex-col gap-1">
            <label class="block" for="exampleInputEmail1">Loan Amount</label>
            <input
              type="number"
              class="bg-gray-900 outline-0 px-2 py-1 rounded"
              id="loanAmount"
              placeholder="Enter Loan Amount"
              v-model.number="loanAmount"
            />
          </div>
          <div class="py-2 flex flex-col gap-1">
            <label class="block" for="exampleInputPassword1">Tenure</label>
            <input
              type="number"
              class="bg-gray-900 outline-0 px-2 py-1 rounded"
              id="tenure"
              placeholder="Enter Tenure in Years"
              v-model.number="tenureYears"
            />
          </div>
          <div class="py-2 flex flex-col gap-1">
            <label class="block" for="exampleInputPassword1">
              Interest Rate
            </label>
            <input
              type="number"
              class="bg-gray-900 outline-0 px-2 py-1 rounded"
              id="interestRate"
              placeholder="Enter Rate of Interest"
              v-model.number="interestRateYearly"
            />
          </div>
        </form>
      </div>

      <!-- Cards -->
      <div class="flex px-6 py-3 gap-3 text-white">
        <div class="mx-auto">
          <div class="px-3 py-1 bg-yellow-500 rounded my-2">
            <div class="font-medium">Monthly EMI</div>
            <div class="card-body">
              {{ emi.toFixed(2) }}
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <div class="px-3 py-1 bg-blue-500 rounded my-2">
            <div class="font-medium">Total Payment</div>
            <div class="card-body">
              {{ totalPayment.toFixed() }}
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <div class="px-3 py-1 bg-gray-600 rounded my-2">
            <div class="font-medium">Total Interest</div>
            <div class="card-body">
              {{ totalInterest.toFixed() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const loanAmount = ref(200000)
const tenureYears = ref(10)
const interestRateYearly = ref(8.5)

const tenureMonths = computed(() => {
  return tenureYears.value * 12
})

const interestRate = computed(() => {
  return interestRateYearly.value / 100 / 12
})

const emi = computed(() => {
  const x = Math.pow(1 + interestRate.value, tenureMonths.value)
  const emiMonthly = (loanAmount.value * x * interestRate.value) / (x - 1)
  return Number(emiMonthly) ?? 0
})

const totalPayment = computed(() => {
  return Number(emi.value * tenureMonths.value) ?? 0
})

const totalInterest = computed(() => {
  return Number(totalPayment.value - loanAmount.value)
})
</script>
