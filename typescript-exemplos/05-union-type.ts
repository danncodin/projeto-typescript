// 5. Union Type

type Status = "online" | "offline" | "ausente";

let statusUsuario: Status = "online";

statusUsuario = "ausente";

// Descomente para ver o erro no VS Code:
// statusUsuario = "ocupado";
