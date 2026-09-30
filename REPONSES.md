# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 32
commande: git rev-list --count depart

Q02: Sarah Benali
commande: git blame src/format.js

Q03: 4459c91715f9b1c97cf4776ad2e5afbdb3aa7051
commande: git bisect start depart v0.2.0
          git bisect run node scripts/controle-alertes.js

Q04: sk_live_01de6ba0c9f4d846
commande: git log -S "API_KEY" -p depart

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git log --diff-filter=D --summary depart

Q06: 17
commande: git rev-list --count v0.2.0..v1.0.0

Q07: commit
commande: git cat-file -t essai-perf

Q08: experiment/cache-redis
commande: git branch -r --no-merged main

Q09: src/utils.js
commande: git log --follow --name-status --oneline src/outils.js

Q10: Nathan Robin (15) 
commande: git shortlog -sn depart

Q11: 24/03/2026
commande: git show v1.0.0

Q12: git log --oneline --grep="Revert" depart
commande: "feat(cli): bannière de démarrage"

Q13: de5637a 
commande: git log --oneline --grep="fix/valeur-totale" depart

Q14: 21
commande: git diff --stat v0.1.0 v1.0.0 -- src/stock.js

Q15: 6d6b920
commande: git log --oneline -S "TODO: gérer les quantités négatives" depart
