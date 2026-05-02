"use client";

import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisVertical,
  Download,
  Trash2,
} from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  onDelete?: () => void;
  onDownload?: () => void;
};

export default function MyDropdown({ onDelete, onDownload }: Props) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const updatePosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + 8,
      left: rect.right - 180,
    });
  };

  const itemStyle = (active: boolean): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    background: active ? "#2B2E33" : "#202226",
    color: active ? "#F0F1F2" : "#A6AAB3",
    fontSize: 14,
    cursor: "pointer",
    width: "100%",
    border: "none",
    textAlign: "left",
  });

  const iconStyle = (active: boolean): React.CSSProperties => ({
    width: 16,
    height: 16,
    color: active ? "#F0F1F2" : "#A6AAB3",
  });

  return (
    <Menu as="div" className="relative">
      {/* BUTTON */}
      <Menu.Button
        ref={buttonRef}
        onClick={updatePosition}
        className="p-1 rounded-lg flex items-center justify-center hover:bg-[#202226] transition"
      >
        <EllipsisVertical color="#6B7280" size={20} />
      </Menu.Button>

      {/* PORTAL */}
      {createPortal(
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items
            className="fixed w-[180px] bg-[#202226] border border-[#40444D] rounded-lg shadow-lg overflow-hidden z-[9999]"
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {/* DOWNLOAD */}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onDownload}
                  style={itemStyle(active)}
                >
                  <Download style={iconStyle(active)} />
                  Download
                </button>
              )}
            </Menu.Item>

            {/* DELETE */}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onDelete}
                  style={itemStyle(active)}
                >
                  <Trash2 style={iconStyle(active)} />
                  Delete
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>,
        document.body
      )}
    </Menu>
  );
}