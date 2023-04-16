[![Build status](https://ci.appveyor.com/api/projects/status/jitkajv97gx2s3ce/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ahj-homeworks-sse-ws-chat/branch/main)

deployment: https://marinaustinovich.github.io/ahj-homeworks-sse-ws_Chat/
## Чат

### Легенда

В рамках реализации корпоративного портала организован чат с использованием WS.

### Описание

Реализована и серверную, и клиентскую часть. Серверную часть - на базе пакета WS.

При загрузке страницы появляется всплывающее окно, в котором запрашивается никнейм, под ним пользователь зарегистрирован в чате:

![](./front/src/img/chat.png)

Если такой никнейм свободен, то открывается окно чата. В противном случае сообщается пользователю, что никнейм занят и ему необходимо выбрать другой. 

Общее окно чата:

![](./front/src/img/chat-2.png)

Сообщения всех участников чата, кроме ваших, выравниваются по левому краю, а ваши — по правому.

Важно: `You` — это не никнейм, а указатель на то, что это вы.

При отключении пользователя он должен удаляться из списка пользователей в левой части.
