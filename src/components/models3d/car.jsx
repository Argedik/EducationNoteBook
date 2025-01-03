/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: soujagah (https://sketchfab.com/soujagah)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/beetlefusca-version-1-cb6e82e73386448fb3b4e2dd25255a5e
Title: Beetle/Fusca (Version 1)
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Car3d = (props) => {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF('/assets/3d/car.glb');
	// const { actions } = useAnimations(animations, group);
	return (
		<group ref={group} {...props}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group
						name="213c1d5bdfdb414694e78855e2803abffbx"
						rotation={[Math.PI / 2, 0, 0]}
					>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="Main"
									position={[6.2, 244.193, -73.762]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<a.group
										ref={group}
										name="Object_5"
										position={[-3.217, 5.043, 0]}
									>
										<mesh
											name="Main_1_0"
											geometry={nodes.Main_1_0.geometry}
											material={materials.material}
										/>
										<mesh
											name="Main_2_0"
											geometry={nodes.Main_2_0.geometry}
											material={materials.material_1}
										/>
										<mesh
											name="Main_3_0"
											geometry={nodes.Main_3_0.geometry}
											material={materials.material_2}
										/>
										<mesh
											name="Main_4_0"
											geometry={nodes.Main_4_0.geometry}
											material={materials.material_3}
										/>
									</a.group>
								</group>
								<group
									name="Door_L"
									position={[-85.321, 155.73, -211.237]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_11" position={[134.257, 96.564, 88.463]}>
										<mesh
											name="Door_L_1_0"
											geometry={nodes.Door_L_1_0.geometry}
											material={materials.material}
										/>
										<mesh
											name="Door_L_2_0"
											geometry={nodes.Door_L_2_0.geometry}
											material={materials.material_1}
										/>
										<mesh
											name="Door_L_3_0"
											geometry={nodes.Door_L_3_0.geometry}
											material={materials.material_2}
										/>
										<mesh
											name="Door_L_4_0"
											geometry={nodes.Door_L_4_0.geometry}
											material={materials.material_3}
										/>
									</group>
								</group>
								<group
									name="Door_R"
									position={[97.592, 156.593, -211.23]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_17" position={[134.25, -86.349, 87.6]}>
										<mesh
											name="Door_R_1_0"
											geometry={nodes.Door_R_1_0.geometry}
											material={materials.material}
										/>
										<mesh
											name="Door_R_2_0"
											geometry={nodes.Door_R_2_0.geometry}
											material={materials.material_1}
										/>
										<mesh
											name="Door_R_3_0"
											geometry={nodes.Door_R_3_0.geometry}
											material={materials.material_2}
										/>
										<mesh
											name="Door_R_4_0"
											geometry={nodes.Door_R_4_0.geometry}
											material={materials.material_3}
										/>
									</group>
								</group>
								<group
									name="Rear"
									position={[6.2, 173.696, 74.204]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_23" position={[-151.184, 5.043, 70.497]}>
										<mesh
											name="Rear_1_0"
											geometry={nodes.Rear_1_0.geometry}
											material={materials.material}
										/>
										<mesh
											name="Rear_3_0"
											geometry={nodes.Rear_3_0.geometry}
											material={materials.material_2}
										/>
										<mesh
											name="Rear_4_0"
											geometry={nodes.Rear_4_0.geometry}
											material={materials.material_3}
										/>
									</group>
								</group>
								<group
									name="Front"
									position={[6.2, 170.865, -216.184]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_28" position={[139.204, 5.043, 73.328]}>
										<mesh
											name="Front_1_0"
											geometry={nodes.Front_1_0.geometry}
											material={materials.material}
										/>
										<mesh
											name="Front_2_0"
											geometry={nodes.Front_2_0.geometry}
											material={materials.material_1}
										/>
										<mesh
											name="Front_3_0"
											geometry={nodes.Front_3_0.geometry}
											material={materials.material_2}
										/>
										<mesh
											name="Front_4_0"
											geometry={nodes.Front_4_0.geometry}
											material={materials.material_3}
										/>
									</group>
								</group>
								<group
									name="Wheel_F_L"
									position={[-85.517, 71.06, -293.677]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_34" position={[216.697, 96.76, 173.132]}>
										<mesh
											name="Wheel_F_L_2_0"
											geometry={nodes.Wheel_F_L_2_0.geometry}
											material={materials.material_1}
										/>
									</group>
								</group>
								<group
									name="Wheel_F_R"
									position={[97.917, 71.06, -293.677]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group
										name="Object_37"
										position={[216.697, -86.674, 173.132]}
									>
										<mesh
											name="Wheel_F_R_2_0"
											geometry={nodes.Wheel_F_R_2_0.geometry}
											material={materials.material_1}
										/>
									</group>
								</group>
								<group
									name="Wheel_B_L"
									position={[6.2, 244.193, -73.762]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_40" position={[-3.217, 5.043, 0]}>
										<mesh
											name="Wheel_B_L_2_0"
											geometry={nodes.Wheel_B_L_2_0.geometry}
											material={materials.material_1}
										/>
									</group>
								</group>
								<group
									name="Wheel_B_R"
									position={[6.2, 244.193, -73.762]}
									rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
								>
									<group name="Object_43" position={[-3.217, 5.043, 0]}>
										<mesh
											name="Wheel_B_R_2_0"
											geometry={nodes.Wheel_B_R_2_0.geometry}
											material={materials.material_1}
										/>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
};

export default Car3d;
