module.exports = {
	someSidebar: {
		"About Us":
			[
				{
					"IT Team": [
						"AboutUs/ItTeam/TheTeam",
					],
				
					"InfoSec Team": [
						"AboutUs/InfoSecTeam/TheTeam",
					],

					"Careers": [
						"careers/rules-of-engagement",
						{
							type: 'link',
							label: "Work for Glasswall",
							href: "http://careers.glasswallsolutions.com/"
						}
					]
				}

			],
		"IT Team":
			[
				{
					"Projects": [
						"how-tos/ci-cd-pipeline"
					]
				}
			],

		"InfoSec Team":
			[
				{
					"Projects": [
						"Projects/InfoSecTeam/IncidentManagement"
					]
				}
			],

			"Security Awareness": 
			[
			{
				"C#": [
     			"security_awareness/languages/Csharp/ldap_injection",
				"security_awareness/languages/Csharp/command_injection",
				"security_awareness/languages/Csharp/xpath_injection",
				"security_awareness/languages/Csharp/hardcoded_keys",
				"security_awareness/languages/Csharp/insecure_randomness",
				"security_awareness/languages/Csharp/open_redirect",
				"security_awareness/languages/Csharp/xss",
				"security_awareness/languages/Csharp/sqli",
				"security_awareness/languages/Csharp/EmptyTryCatch",

				
				],
				
    			"C": [
     			 "security_awareness/languages/C/BufferOverflow",
     			 "security_awareness/languages/C/uaf",
     			 "security_awareness/languages/C/MemoryLeak",
     			 "security_awareness/languages/C/DoubleFree",
     			 "security_awareness/languages/C/IntegerOverflow",
     			 "security_awareness/languages/C/OutOfBounds",

     			
     			 

    			],

    		}
				
			]
		
	},
};
