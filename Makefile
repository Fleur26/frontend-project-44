install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calculator:
	node bin/brain-calculator.js

brain-gcd:
	node bin/brain-gcd.js
