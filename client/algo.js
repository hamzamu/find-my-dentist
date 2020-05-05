/*

*/
import _ from 'lodash';

var arr = ["Do your gums bleed while brushing or floosing", "Are your teeth sensetive to hot or cold liquids/ food", "Are your teeth sensetive to sweet or sour liquids/ food", "Do any of your teeth feel painful", "Have you had any head, neck, or jaw injuries", "Do you have frequent headaches", "Do you bite your lips or cheeks frequently", "Have you noticed any loosening of your teeth", "Does food tend to become caught between your teeth", "Have you ever had periodontal treatment (gums)", "Have you had any difficult extractions in the past", "Have you ever had any prolonged bleeding following Extractions", "Do you wear dentures or partials", "Have you ever received oral hygiene instructions regarding the care of your teeth and gums"]
var tags = [{
		"tag": "input",
		"type": "text",
		"id": "first-tag",
		"value": "",
		"cf-questions": "What is your name?"
		// "cf-questions": "Prefilled1&&with follow-up1&&with follow-up11||Prefilled2&&with follow-up2&&with follow-up22"
	},
	{
		"tag": "input",
		"type": "text",
		"id": "firstx-tag",
		"value": "",
		"cf-questions": "How old are you?"
	}
]
App.getCFormTags = (tags, arr) => {
	var a = App.arrCheck(arr)
	var m = tags.concat(a)
	console.log(a)
	return m
}
App.arrCheck = (arr) => {
	var r = []
	if (_.isArray(arr)) {
		_.each(arr, (i) => {
			var s = 	{
				// select group
				"tag": "select",
				"name": "sensetive"+_.random(100),
				"cf-questions": i,
				"isMultiChoice": false,
				"children": [{
						"tag": "option",
						"cf-label": "yes",
						"value": "no"
					},
					{
						"tag": "option",
						"cf-label": "no",
						"value": "no"
					}
				]
			};
			r.push(s)
		})
		// var xx = _.toObject(r)
		// console.log(xx)
		return r;
	}
}

// App.arrCheck(arr);

Algo = {
	"options": {
		"preventAutoAppend": true,
		"preventAutoFocus": false,
		"submitCallback": "",
	},
	"tags": App.getCFormTags(tags,arr)
}


cformTags = [{
		// select group
		"tag": "select",
		"name": "country",
		"cf-questions": "First tag value: {first-tag}&& + follow-up",
		"cf-input-placeholder": "Some copy",
		"isMultiChoice": false,
		"children": [{
				"tag": "option",
				"cf-label": "USA",
				"value": "usa"
			},
			{
				"tag": "option",
				"cf-label": "UK",
				"value": "uk"
			}
		]
	},
	{
		// basic tag
		"tag": "input",
		"type": "text",
		"cf-questions": "Tag is injected at runtime, data from 'webservice', check source of <a href='formless.html' style='text-decoration:underline'>formless.html</a>",
		"cf-error": "Inject some text"
	},
	{
		// tag group
		"tag": "fieldset",
		"type": "Checkboxes",
		"cf-input-placeholder": "Tag group is injected",
		"cf-questions": "Choose an injected tag",
		"children": [{
				"tag": "input",
				"type": "checkbox",
				"name": "checkboxes-buttons-1",
				"cf-label": "checkbox-x1",
				"checked": "checked"
			},
			{
				"tag": "input",
				"type": "checkbox",
				"name": "checkboxes-buttons-1",
				"cf-label": "checkbox-x2"
			}
		]
	}
];


AlgoX = {
	"options": {
		"preventAutoAppend": true,
		"preventAutoFocus": false,
		"submitCallback": "",
	},
	"tags": [{
			"tag": "input",
			"type": "text",
			"id": "first-tag",
			"value": "",
			"cf-questions": "What is your name?"
			// "cf-questions": "Prefilled1&&with follow-up1&&with follow-up11||Prefilled2&&with follow-up2&&with follow-up22"
		},
		{
			"tag": "input",
			"type": "text",
			"id": "first-tag",
			"value": "",
			"cf-questions": "How old are you?"
		},
		{
			"tag": "select",
			"cf-input-placeholder": "Choose one of the above",
			"multiple": "multiple",
			"cf-questions": "Choose multiple of the elements from the list",
			"children": [{
					"tag": "option",
					"name": "option-dropdown-1",
					"cf-label": "option-1",
					"value": "-1"
				},
				{
					"tag": "option",
					"name": "option-dropdown-1",
					"cf-label": "option-2",
					"value": "-2"
				}
			]
		},
		{
			"tag": "fieldset",
			"type": "Radio buttons",
			"cf-input-placeholder": "Choose one of the above",
			"cf-questions": "Choose one of the radioss",
			"children": [{
					"tag": "input",
					"type": "radio",
					"name": "radio-buttons-1",
					"cf-label": "radio-1",
					"checked": "checked"
				},
				{
					"tag": "input",
					"type": "radio",
					"name": "radio-buttons-1",
					"cf-label": "radio-2"
				}
			]
		},
		{
			"tag": "fieldset",
			"type": "Checkboxes",
			"cf-input-placeholder": "Choose above",
			"cf-questions": "Choose some checkboxes",
			"children": [{
					"tag": "input",
					"type": "checkbox",
					"name": "checkboxes-buttons-1",
					"cf-label": "checkbox-1",
					"checked": "checked"
				},
				{
					"tag": "input",
					"type": "checkbox",
					"name": "checkboxes-buttons-1",
					"cf-label": "checkbox-2"
				}
			]
		},
		{
			"tag": "input",
			"type": "password",
			"cf-input-placeholder": "Password field",
			"cf-questions": "Write a password"
		},
		{
			"tag": "input",
			"type": "text",
			"pattern": ".{5,10}",
			"cf-input-placeholder": "Input w. pattern attribute",
			"cf-error": "No less than 5 and no more than 10 characters",
			"cf-questions": "Keep between 5-10 characters"
		},
		{
			"tag": "input",
			"type": "text",
			"required": "required",
			"cf-questions": "This field is required (attribute)",
			"cf-error": "Please write something"
		},
		{
			"tag": "input",
			"type": "text",
			"required": "required",
			"cf-questions": "This field uses window.testValidation",
			"cf-validation": "window.testValidation",
			"cf-error": "Check the window.testValidation method"
		}
	]
}