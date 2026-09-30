import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5 }), 'A1 — Vis : 3 u ⚠');
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 10, seuil: 5 }), 'A1 — Vis : 10 u');
  assert.equal(formaterLigne({ ref: 'A2', nom: 'Câble', quantite: 5, unite: 'm', seuil: 1 }), 'A2 — Câble : 5 m');
});