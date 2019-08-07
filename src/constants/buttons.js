function buttonData() {

	const numkeys = [];
	
	for (let i=0; i<10; ++i) {
		numkeys.push(
			{
				label: i,
				type: "number",
				funct: "display",
				name: `key_${i}`
			});
	}

	const labels = numkeys.concat([		
		{
			label: "+",
			name: "add",
		  type: "operator",
		  funct: "display"
		},
		{
			label: "-",
			name: "substract",
			type: "operator",
			funct: "display"
		},
		{
			label: "*",
			name: "multiply",
			type: "operator",
			funct: "display"
		},
		{
			label: "/",
			type: "operator",
			name: "divide",
			funct: "display"
		},
		{
			label: "=",
			type: "operator",
			name: "equals",
			funct: "evaluate"
		},
		{
			label: "Clear",
			name: "clear",
			type: "operator",
			funct: "clear"
		},
		{
			label: "(",
			name: "open_bracket",
			type: "operator",
			funct: "clear"
		},
		{
			label: ")",
			name: "close_bracket",
			type: "operator",
			funct: "clear"
		}
		])

	return labels
};

export default buttonData();