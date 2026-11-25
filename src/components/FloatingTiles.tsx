import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import { skillTiles, type SkillTile } from '../data/skills';
import SkillIcon from './SkillIcon';

type TileLayout = {
  left: number;
  top: number;
  size: number;
  rotate: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  sway: number;
};

function buildLayouts(count: number): TileLayout[] {
  const layouts: TileLayout[] = [];
  const center = { x: 50, y: 48, rx: 16, ry: 17 };

  for (let i = 0; i < count; i++) {
    const angle = i * 2.399963;
    const ring = 27 + (i % 5) * 7 + Math.floor(i / 9) * 4;
    let left = 50 + Math.cos(angle) * ring;
    let top = 50 + Math.sin(angle) * ring * 0.88;

    const inCenter =
      Math.abs(left - center.x) < center.rx && Math.abs(top - center.y) < center.ry;
    if (inCenter) {
      left += left >= center.x ? center.rx : -center.rx;
      top += top >= center.y ? center.ry : -center.ry;
    }

    layouts.push({
      left: Math.min(96, Math.max(3, left)),
      top: Math.min(94, Math.max(5, top)),
      size: [44, 48, 52, 56, 60][i % 5],
      rotate: ((i * 13) % 18) - 9,
      duration: 3.4 + (i % 7) * 0.45,
      delay: -(i * 0.52),
      driftX: 6 + (i % 5) * 2,
      driftY: 5 + (i % 4) * 2,
      sway: 2.5 + (i % 3),
    });
  }

  return layouts;
}

function chipSide(left: number, top: number): 'right' | 'left' | 'bottom' | 'top' {
  if (left < 30) return 'right';
  if (left > 70) return 'left';
  if (top < 35) return 'bottom';
  if (top > 68) return 'top';
  return left < 50 ? 'right' : 'left';
}

const chipOffset: Record<ReturnType<typeof chipSide>, string> = {
  right: 'left-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2',
  left: 'right-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2',
  bottom: 'top-[calc(100%+0.65rem)] left-1/2 -translate-x-1/2',
  top: 'bottom-[calc(100%+0.65rem)] left-1/2 -translate-x-1/2',
};

const FloatingTiles = () => {
  const regionId = useId();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<SkillTile | null>(null);
  const layouts = useMemo(() => buildLayouts(skillTiles.length), []);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const onPointer = (event: PointerEvent) => {
      if (!canvasRef.current?.contains(event.target as Node)) close();
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [selected, close]);

  return (
    <div className="mt-12">
      <div
        ref={canvasRef}
        role="group"
        aria-labelledby={regionId}
        className="relative mx-auto min-h-[30rem] w-full max-w-5xl sm:min-h-[34rem]"
      >
        <p id={regionId} className="sr-only">
          Interactive skill tiles. Choose a tile to read the tool name and category.
        </p>

        <div
          className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center px-8 text-center"
          aria-hidden
        >
          <p className="font-display text-[clamp(2.25rem,7vw,4rem)] font-medium leading-[0.92] tracking-tight text-ink">
            Tools
            <br />
            I use
          </p>
          <p className="mt-4 max-w-[14rem] text-xs leading-relaxed text-mute">
            Tap a tile — names stay in the chips
          </p>
        </div>

        <div className="absolute inset-0 z-10">
          {skillTiles.map((tile, index) => {
            const layout = layouts[index];
            const isOpen = selected?.id === tile.id;
            const side = chipSide(layout.left, layout.top);

            return (
              <div
                key={tile.id}
                className="absolute"
                style={{
                  left: `${layout.left}%`,
                  top: `${layout.top}%`,
                  width: layout.size,
                  height: layout.size,
                  marginLeft: -layout.size / 2,
                  marginTop: -layout.size / 2,
                  zIndex: isOpen ? 30 : 1,
                }}
              >
                <button
                  type="button"
                  aria-label={`${tile.skill.name}, ${tile.group}`}
                  aria-expanded={isOpen}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelected(isOpen ? null : tile);
                  }}
                  className={`skill-tile-float h-full w-full rounded-2xl shadow-[0_10px_28px_rgba(22,20,28,0.14)] transition-[box-shadow,filter] duration-200 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-medium dark:shadow-[0_10px_32px_rgba(0,0,0,0.45)] ${
                    isOpen ? 'ring-2 ring-purple-medium ring-offset-2 ring-offset-paper' : ''
                  }`}
                  style={
                    {
                      '--tile-rotate': `${layout.rotate}deg`,
                      '--float-duration': `${layout.duration}s`,
                      '--float-delay': `${layout.delay}s`,
                      '--drift-x': `${layout.driftX}px`,
                      '--drift-y': `${layout.driftY}px`,
                      '--float-sway': `${layout.sway}deg`,
                    } as CSSProperties
                  }
                >
                  <SkillIcon skill={tile.skill} variant="tile" />
                </button>

                {isOpen ? (
                  <div
                    role="status"
                    className={`pointer-events-none absolute z-40 whitespace-nowrap rounded-full bg-purple-medium px-3.5 py-2 text-sm font-medium text-white shadow-lg ${chipOffset[side]}`}
                  >
                    <span className="block">{tile.skill.name}</span>
                    <span className="block text-[10px] font-normal uppercase tracking-wider text-white/80">
                      {tile.group}
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-mute">
        {selected
          ? `${selected.skill.name} — ${selected.groupNote}`
          : `${skillTiles.length} tools across front end, automation, APIs, and study.`}
      </p>
    </div>
  );
};

export default FloatingTiles;