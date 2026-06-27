

/** @typedef {"low"|"moderate"|"high"} RiskLevel */
/** @typedef {"patient"|"doctor"|"admin"} UserRole */
/** @typedef {"scheduled"|"completed"|"cancelled"|"no-show"} AppointmentStatus */

/**
 * @typedef {Object} Patient
 * @property {string}   _id
 * @property {string}   name
 * @property {number}   age
 * @property {string}   phone
 * @property {RiskLevel} riskLevel
 * @property {number}   riskScore
 * @property {string[]} symptoms
 * @property {string}   createdAt
 */

/**
 * @typedef {Object} Appointment
 * @property {string}             _id
 * @property {string}             patientId
 * @property {string}             doctorId
 * @property {string}             date
 * @property {string}             time
 * @property {AppointmentStatus}  status
 * @property {string}             department
 */

/**
 * @typedef {Object} User
 * @property {string}   _id
 * @property {string}   name
 * @property {string}   email
 * @property {UserRole} role
 * @property {string}   token
 */

/**
 * @typedef {Object} NavLink
 * @property {string}  label
 * @property {string}  href
 * @property {string}  [icon]
 */

/**
 * @typedef {Object} NavGroup
 * @property {string}    heading
 * @property {NavLink[]} links
 */

/**
 * @typedef {Object} PricingPlan
 * @property {string}   name
 * @property {string}   price
 * @property {string}   period
 * @property {string}   desc
 * @property {string[]} features
 * @property {string}   cta
 * @property {boolean}  featured
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} quote
 * @property {string} name
 * @property {string} role
 * @property {string} initials
 */

/** @typedef {{ q: string, a: string }} FAQ */
/** @typedef {{ value: string, label: string }} Stat */
/** @typedef {{ icon: string, title: string, desc: string }} Feature */
