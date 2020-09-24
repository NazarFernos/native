const acceptedBudget = (budget, employees) => {
	const total = getDrinksTotalCost(employees); 

	const acceptedMembers = getAcceptedBudgetMembers(budget, total);

	return partyMembers(acceptedMembers, employees);

}

const getDrinksTotalCost = employees => {
	const drinks_t = {};

    return employees.map(emp => {
        emp.drinks.forEach(drink => {
            let price = 0;
            for (let comp in recipes[drink])
                if (recipes[drink].hasOwnProperty(comp)) {
                    price += recipes[drink][comp] * prices[comp];
                }

            if (drinks_t[emp.id])
                drinks_t[emp.id] += price;
            else
                drinks_t[emp.id] = price;
        })
        return {id: emp.id, total: drinks_t[emp.id]}
    });
}

const getAcceptedBudgetMembers = (budget, total) => {
	let temp_budg = 0;
	let index = 0;
	const accepted = [];
	let cached_i = 0;

  while(budget - temp_budg > 0) {
    budget -= temp_budg;
    let min = Infinity;
    total.forEach( (el, i) => {
      if(min > el.total) {
        min = el.total;
        index = i;
      }
    })
    if(budget - min > 0) {
      accepted.push(total.splice(index, 1).pop());
      temp_budg = accepted[cached_i++].total;
    }
  }
	return accepted;
}

const partyMembers = (people, employees)  => {
  let members = '';
  
  employees.forEach( e => {
    people.forEach( p => {
      if(e['id'] === p['id']) {
        members += `id: ${e['id']}, name: "${e['name']}", drinks: ["${e['drinks']}"]\n`
      }
    })
  })
  return members;
}

console.log('3. QuantiCoders employees');
console.log(acceptedBudget(0.25, employees))
