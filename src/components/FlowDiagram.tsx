"use client";

const nodes = [
  { id: 1, label: "Prisão na Rua", sub: "Integração Policial", col: 0, row: 0, color: "#22C55E" },
  { id: 2, label: "Alocação CRV", sub: "Vaga automática", col: 1, row: 0, color: "#16A34A" },
  { id: 3, label: "Check-in", sub: "Unidade Prisional", col: 2, row: 0, color: "#15803D" },
  { id: 4, label: "Triagem", sub: "Adaptação inicial", col: 3, row: 0, color: "#166534" },
  { id: 5, label: "Saúde", sub: "Paciente", col: 0, row: 1, color: "#22C55E" },
  { id: 6, label: "Educação", sub: "Remição letiva", col: 1, row: 1, color: "#16A34A" },
  { id: 7, label: "Trabalho", sub: "Remição labor", col: 2, row: 1, color: "#15803D" },
  { id: 8, label: "Social/Psicol.", sub: "Acomp. social", col: 3, row: 1, color: "#166534" },
  { id: 9, label: "Execução Penal", sub: "Progressão + Remição", col: 0, row: 2, color: "#22C55E" },
  { id: 10, label: "Controle Interno", sub: "Permanência + CRV", col: 1, row: 2, color: "#16A34A" },
  { id: 11, label: "Controle de Itens", sub: "Produtos autorizados", col: 2, row: 2, color: "#15803D" },
  { id: 12, label: "Transferência", sub: "Solicitação → Auditoria", col: 3, row: 2, color: "#166534" },
];

const NODE_W = 130;
const NODE_H = 52;
const COL_GAP = 158;
const ROW_GAP = 90;
const PAD_X = 16;
const PAD_Y = 16;

function getX(col: number) { return PAD_X + col * COL_GAP; }
function getY(row: number) { return PAD_Y + row * ROW_GAP; }

const SVG_W = PAD_X * 2 + 3 * COL_GAP + NODE_W;
const SVG_H = PAD_Y * 2 + 2 * ROW_GAP + NODE_H;

const connections: [number, number][] = [
  [1, 2], [2, 3], [3, 4],
  [4, 5], [4, 6], [4, 7], [4, 8],
  [5, 9], [6, 10], [7, 11], [8, 12],
];

function getNodeCenter(id: number) {
  const n = nodes.find((x) => x.id === id)!;
  return {
    x: getX(n.col) + NODE_W / 2,
    y: getY(n.row) + NODE_H / 2,
  };
}

export default function FlowDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="min-w-[640px]">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ height: SVG_H }}
          role="img"
          aria-label="Diagrama de fluxo do sistema CARCERIS"
        >
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#22C55E" opacity="0.7" />
            </marker>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid background */}
          <rect width={SVG_W} height={SVG_H} fill="transparent" />

          {/* Connections */}
          {connections.map(([from, to], i) => {
            const a = getNodeCenter(from);
            const b = getNodeCenter(to);
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            const d = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
            return (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="1.5"
                  opacity="0.15"
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="1.5"
                  opacity="0.6"
                  strokeLinecap="round"
                  markerEnd="url(#arrowhead)"
                  className="flow-line-animated"
                  style={{ strokeDasharray: "6 4", animationDelay: `${i * 0.15}s` }}
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((n, i) => {
            const x = getX(n.col);
            const y = getY(n.row);
            return (
              <g key={n.id} style={{ animationDelay: `${i * 0.08}s` }}>
                {/* Glow bg */}
                <rect
                  x={x - 2}
                  y={y - 2}
                  width={NODE_W + 4}
                  height={NODE_H + 4}
                  rx={10}
                  fill={n.color}
                  opacity="0.06"
                  filter="url(#glow)"
                />
                {/* Card */}
                <rect
                  x={x}
                  y={y}
                  width={NODE_W}
                  height={NODE_H}
                  rx={8}
                  fill="#0A1A10"
                  stroke={n.color}
                  strokeWidth="1"
                  opacity="0.9"
                />
                {/* Dot indicator */}
                <circle cx={x + 12} cy={y + 16} r={4} fill={n.color} className="animate-pulse-green" />
                {/* Label */}
                <text
                  x={x + 22}
                  y={y + 19}
                  fill="#E8F5E9"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                >
                  {n.label}
                </text>
                {/* Sub */}
                <text
                  x={x + 12}
                  y={y + 35}
                  fill="#86EFAC"
                  fontSize="8.5"
                  fontFamily="Inter, sans-serif"
                  opacity="0.7"
                >
                  {n.sub}
                </text>
                {/* Index badge */}
                <text
                  x={x + NODE_W - 10}
                  y={y + 19}
                  fill={n.color}
                  fontSize="8"
                  fontFamily="Inter, monospace"
                  textAnchor="end"
                  opacity="0.5"
                >
                  {String(n.id).padStart(2, "0")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
