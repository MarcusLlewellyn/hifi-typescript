// TODO: Name collisions between Hifi and browser defaults:
// (location Window Selection)
// Likely need to figure out a tsconfig.json format that excludes the default .d.ts files.
//
// TODO: Signals are not typesafe.
// All return values of Signal should be replaced with
//   Signal<(arg:type, arg:type, ...)=>void>
//
// TODO: There are a number of places that the documentation doesn't provide actual types
// Reasonable guesses were made where possible, 'any' was used for the rest.

declare enum ContactEventType {
     startCollision = 0,
     continuedCollision = 1,
     endCollsion = 2
}

declare enum KeyboardModifiers {
     Shift = 0x02000000,
     Control = 0x04000000,
     Alt = 0x08000000,
     Meta = 0x010000000,
     Keypad = 0x20000000,
     Group = 0x40000000
}

declare enum PickType {
     Ray,
     Stylus,
     Parabola,
     Collision
}

declare enum ShapeType {
     "none",
     "box",
     "sphere",
     "capsule-x",
     "capsule-y",
     "capsule-z",
     "cylinder-x",
     "cylinder-y",
     "cylinder-z",
     "hull",
     "compound",
     "simple-hull",
     "simple-compound",
     "static-mesh",
     "plane"
}

declare class AACube {
     x: number;
     y: number;
     scale: number;
}

declare class AttachmentData {
     modelUrl: string;
     jointName: string;
     translation: Vec3;
     rotation: Vec3;
     scale: number;
     soft: boolean;
}

declare type BoxFace = "MIN_X_FACE" | "MAX_X_FACE" | "MIN_Y_FACE" |
     "MAX_Y_FACE" | "MIN_Z_FACE" | "MAX_Z_FACE" | "UNKNOWN_FACE";

declare class Collision {
     type: ContactEventType;
     idA: Uuid;
     idB: Uuid;
     penetration: Vec3;
     contactPoint: Vec3;
     velocityChange: Vec3;
}

declare class CollisionContact {
     pointOnPick: Vec3;
     pointOnObject: Vec3;
     normalOnPick: Vec3;
}

declare class CollisionPickResult {
     intersects: boolean;
     intersectingObjects: Array<IntersectingObject>;
     collisionRegion: CollisionRegion;
}

declare type CollisionMask = any;

declare class CollisionRegion {
     shape: Shape;
     position: Vec3;
     orientation: Quat;
     threshhold: number;
     collisionGroup: CollisionMask;
     parentID: Uuid;
     parentJointIndex: number;
     joint: string;
}
type rgbColor = {
     r?: number;
     g?: number;
     b?: number;
}
type xyzColor = {
     x?: number;
     y?: number;
     z?: number;
}
type redGreenBlueColor = {
     red?: number;
     green?: number;
     blue?: number;
}

declare type Color = rgbColor | xyzColor | redGreenBlueColor;

declare type ColorFloat = Color;

declare class FBXAnimationFrame {
     rotations: Array<Quat>;
     translations: Array<Vec3>;
}

declare class IntersectingObject {
     id: Uuid;
     type: number;
     collisionContacts: Array<CollisionContact>;
}

declare class KeyEvent {
     key?: number;
     text?: string;
     isShifted?: boolean;
     isMeta?: boolean;
     isControl?: boolean;
     isAlt?: boolean;
     isKeypad?: boolean;
     isAutoRepeat?: boolean;
}

declare class Material {
     name?: string;
     model?: string;
     emissive?: Color | RGBS;
     opacity?: number;
     unlit?: boolean;
     albedo?: Color | RGBS;
     roughness?: number;
     metallic?: number;
     scattering?: number;
     emissiveMap?: string;
     albedoMap?: string;
     opacityMap?: string;
     roughnessMap?: string;
     glossMap?: string;
     metallicMap?: string;
     specularMap?: string;
     normalMap?: string;
     bumpMap?: string;
     occlusionMap?: string;
     scatteringMap?: string;
     lightMap?: string;
}

declare class MaterialResource {
     materialVersion?: number;
     materials?: Material | Array<Material>;
}

declare class MouseEvent {
     x?: number;
     y?: number;
     button?: string;
     isLeftButton?: boolean;
     isMiddleButton?: boolean;
     isRightButton?: boolean;
     isShifted?: boolean;
     isMeta?: boolean;
     isControl?: boolean;
     isAlt?: boolean;
}

declare class ParabolaPickResult {
     type: number;
     intersects: boolean;
     objectID: Uuid;
     distance: number;
     parabolicDistance: number;
     intersection: Vec3;
     surfaceNormal: Vec3;
     extraInfo: any;
     parabola: PickParabola;
}

declare class PointerEvent {
     type?: string;
     id?: number;
     pos2d?: Vec2;
     pos3D?: Vec3;
     normal?: Vec3;
     direction?: Vec3;
     button?: string;
     isPrimaryButton?: boolean;
     isLeftButton?: boolean;
     isSecondaryButton?: boolean;
     isRightButton?: boolean;
     isTertiaryButton?: boolean;
     isMiddleButton?: boolean;
     isPrimaryHeld?: boolean;
     isSecondaryHeld?: boolean;
     isTertiaryHeld?: boolean;
     keyboardModifiers?: KeyboardModifiers;
}

declare class Pose {
     translation: Vec3;
     rotation: Quat;
     velocity: Vec3;
     angularVelocity: Vec3;
     valid: boolean;
}

declare class RayPickResult {
     type: number;
     intersects: boolean;
     objectID: Uuid;
     distance: number;
     intersection: Vec3;
     surfaceNormal: Vec3;
     extraInfo: any;
     searchRay: PickRay;
}

declare type Rect = {
     x: number;
     y: number;
     width: number;
     height: number;
}

declare type RGBS = Array<number>;

declare type Shape = {
     shapeType?: ShapeType;
     dimensions?: Vec3;
}

declare class Size {
     height: number;
     width: number;
}

declare class StylusPickResult {
     type: number;
     intersects: boolean;
     objectID: Uuid;
     distance: number;
     intersection: Vec3;
     surfaceNormal: Vec3;
     extraInfo: any;
     stylusTip: StylusTip;
}

declare class StylusTip {
     side: number;
     position: Vec3;
     orientation: Quat;
     velocity: Vec3;
}

declare class TouchEvent {
     x: number;
     y: number;
     isPressed: boolean;
     isMoved: boolean;
     isStationary: boolean;
     isReleased: boolean;
     isShifted: boolean;
     isMeta: boolean;
     isControl: boolean;
     isAlt: boolean;
     touchPoints: number;
     points: Array<Vec2>;
     radius: number;
     isPinching: boolean;
     isPinchOpening: boolean;
     angle: number;
     deltaAngle: number;
     angles: Array<number>;
     isRotating: boolean;
     rotating: string;
}

declare class Vec2 {
     x?: number;
     y?: number;
}

declare class Vec4 {
     x?: number;
     y?: number;
     z?: number;
     w?: number;
}

declare class ViewFrustum {
     position: Vec3;
     orientation: Quat;
     centerRadius: number;
     fieldOfView: number;
     apsectRatio: number;
     projection: Mat4;
}

declare class WheelEvent {
     x: number;
     y: number;
     delta: number;
     orientation: string;
     isLeftButton: boolean;
     isMiddleButton: boolean;
     isRightButton: boolean;
     isShifted: boolean;
     isMeta: boolean;
     isControl: boolean;
     isAlt: boolean;
}

declare class Signal<F = Function> {
     connect(callback: F): void;
     disconnect(callback: F): void;
}

declare class PickParabola {
     origin: Vec3;
     velocity: Vec3;
     acceleration: Vec3;
}

declare class PickRay {
     origin: Vec3;
     direction: Vec3;
}

declare class Agent {
     static setIsAvatar(isAvatar: boolean): void;
     static isAvatar(): boolean;
     static playAvatarSound(avatarSound: object): void;
     isAvatar: boolean;
     isPlayingAvatarSound: boolean;
     isListeningToAudioStream: boolean;
     isNoiseGateEnabled: boolean;
     lastReceivedAudioLoudness: number;
     sessionUUID: Uuid;
}

declare class Avatar {
     static startAnimation(url: string, fps: number, priority: number, loop: boolean, hold: boolean, firstFrame: number, lastFrame: number, maskedJoints: Array<string>): void;
     static stopAnimation(): void;
     static getAnimationDetails(): Avatar.AnimationDetails;
     static getDomainMinScale(): number;
     static getDomainMaxScale(): number;
     static getEyeHeight(): number;
     static getHeight(): number;
     static setHandState(state: string): void;
     static getHandState(): string;
     static setRawJointData(data: Array<JointData>): void;
     static setJointData(index: number, rotation: Quat, translation: Vec3): void;
     static setJointData(name: string, rotation: Quat, translation: Vec3): void;
     static setJointRotation(index: number, rotation: Quat): void;
     static setJointRotation(name: string, rotation: Quat): void;
     static setJointTranslation(index: number, translation: Vec3): void;
     static setJointTranslation(name: string, translation: Vec3): void;
     static clearJointData(index: number): void;
     static clearJointData(name: string): void;
     static isJointDataValid(index: number): boolean;
     static isJointDataValid(name: string): boolean;
     static getJointRotation(index: number): Quat;
     static getJointRotation(name: string): Quat;
     static getJointTranslation(index: number): Vec3;
     static getJointTranslation(name: number): Vec3;
     static getJointRotations(): Array<Quat>;
     static getJointTranslations(): Array<Vec3>;
     static setJointRotations(jointRotations: Array<Quat>): void;
     static setJointTranslations(translations: Array<Vec3>): void;
     static clearJointsData(): void;
     static getJointIndex(name: string): number;
     static getJointNames(): Array<string>;
     static setBlendshape(name: string, value: number): void;
     static getAttachmentsVariant(): object;
     static setAttachmentsVariant(variant: object): void;
     static updateAvatarEntity(entityID: Uuid, entityData: string): void;
     static clearAvatarEntity(entityID: Uuid): void;
     static setForceFaceTrackerConnected(connected: boolean): void;
     static getAttachmentData(): Array<AttachmentData>;
     static setAttachmentData(attachmentData: Array<AttachmentData>): void;
     static attach(modelURL: string, jointName: string, translation: Vec3, rotation: Quat, scale: number, isSoft: boolean, allowDuplicates: boolean, useSaved: boolean): void;
     static detachOne(modelURL: string, jointName: string): void;
     static detachAll(modelURL: string, jointName: string): void;
     static getAvatarEntityData(): object;
     static setAvatarEntityData(avatarEntityData: object): void;
     static getSensorToWorldMatrix(): Mat4;
     static getSensorToWorldScale(): number;
     static getControllerLeftHandMatrix(): Mat4;
     static getControllerRightHandMatrix(): Mat4;
     static getDataRate(rateName: string): number;
     static getUpdateRate(rateName: string): number;
     static displayNameChanged: Signal;
     static sessionDisplayNameChanged: Signal;
     static skeletonModelURLChanged: Signal;
     static lookAtSnappingChanged: Signal;
     static sessionUUIDChanged: Signal;
     static sendAvatarDataPacket(sendAll: boolean): void;
     static sendIdentityPacket(): void;
     static setJointMappingsFromNetworkReply(): void;
     static setSessionUUID(sessionUUID: Uuid): void;
     static getAbsoluteJointRotationInObjectFrame(index: number): Quat;
     static getAbsoluteJointTranslationInObjectFrame(index: number): Vec3;
     static setAbsoluteJointRotationInObjectFrame(index: number, rotation: Quat): boolean;
     static setAbsoluteJointTranslationInObjectFrame(index: number, translation: Vec3): boolean;
     static getTargetScale(): number;
     static resetLastSent(): void;
     position: Vec3;
     scale: number;
     density: number;
     handPosition: Vec3;
     bodyYaw: number;
     bodyPitch: number;
     bodyRoll: number;
     orientation: Quat;
     headOrientation: Quat;
     headPitch: number;
     headYaw: number;
     headRoll: number;
     velocity: Vec3;
     angularVelocity: Vec3;
     audioLoudness: number;
     audioAverageLoudness: number;
     displayName: string;
     sessionDisplayName: string;
     lookAtSnappingEnabled: boolean;
     skeletonModelURL: string;
     attachmentData: Array<AttachmentData>;
     jointNames: Array<string>;
     sessionUUID: Uuid;
     sensorToWorldMatrix: Mat4;
     controllerLeftHandMatrix: Mat4;
     controllerRightHandMatrix: Mat4;
     sensorToWorldScale: number;
}

declare namespace Avatar {
     class AnimationDetails {
          role: string;
          url: string;
          fps: number;
          priority: number;
          loop: boolean;
          hold: boolean;
          startAutomatically: boolean;
          firstFrame: number;
          lastFrame: number;
          running: boolean;
          currentFrame: number;
          allowTranslation: boolean;
     }
     class AttachmentData {
          modelUrl: string;
          joinname: string;
          translation: Vec3;
          rotation: Vec3;
          scale: number;
          soft: boolean;
     }
}

declare class JointData {
}

declare class EntityViewer {
     static setPosition(position: Vec3): void;
     static setOrientation(orientation: Quat): void;
     static setCenterRadius(radius: number): void;
     static setKeyholeRadius(radius: number): void;
     static setVoxelSizeScale(sizeScale: number): void;
     static setBoundaryLevelAdjust(boundaryLevelAdjust: number): void;
     static setMaxPacketsPerSecond(maxPacketsPerSecond: number): void;
     static getPosition(): Vec3;
     static getOrientation(): Quat;
     static getVoxelSizeScale(): number;
     static getBoundaryLevelAdjust(): number;
     static getMaxPacketsPerSecond(): number;
     static getOctreeElementsCount(): number;
}

declare class HifiAbout {
     static openUrl(url: string): void;
     buildDate: string;
     buildVersion: string;
     qtVersion: string;
}

declare class AvatarBookmarks {
     static addBookMark(): void;
     static bookmarkLoaded: Signal;
     static bookmarkDeleted: Signal;
     static bookmarkAdded: Signal;
     static deleteBookmark(): void;
}

declare class LocationBookmarks {
     static deleteBookmark(): void;
     static addBookmark(): void;
     static setHomeLocationToAddress(address: string): void;
}

declare class LODManager {
     static setAutomaticLODAdjust(value: boolean): void;
     static getAutomaticLODAdjust(): boolean;
     static setDesktopLODTargetFPS(value: number): void;
     static getDesktopLODTargetFPS(): number;
     static setHMDLODTargetFPS(value: number): void;
     static getHMDLODTargetFPS(): number;
     static getLODFeedbackText(): string;
     static setOctreeSizeScale(sizeScale: number): void;
     static getOctreeSizeScale(): number;
     static setBoundaryLevelAdjust(boundaryLevelAdjust: number): void;
     static getBoundaryLevelAdjust(): number;
     static getLODTargetFPS(): number;
     static LODIncreased: Signal;
     static LODDecreased: Signal;
     presentTime: number;
     engineRunTime: number;
     gpuTime: number;
     avgRenderTime: number;
     fps: number;
     lodLevel: number;
     lodDecreaseFPS: number;
     lodIncreaseFPS: number;
}

declare class SpeechRecognizer {
     static setEnabled(enabled: boolean): void;
     static addCommand(command: string): void;
     static removeCommand(command: string): void;
     static commandRecognized: Signal;
     static enabledUpdated: Signal;
}

declare class AudioScope {
     static toggle(): void;
     static setVisible(visible: boolean): void;
     static getVisible(): boolean;
     static togglePause(): void;
     static setPause(paused: boolean): void;
     static getPause(): boolean;
     static toggleTrigger(): void;
     static getAutoTrigger(): boolean;
     static setAutoTrigger(autoTrigger: boolean): void;
     static setTriggerValues(x: number, y: number): void;
     static setTriggered(triggered: boolean): void;
     static getTriggered(): boolean;
     static getFramesPerSecond(): number;
     static getFramesPerScope(): number;
     static selectAudioScopeFiveFrames(): void;
     static selectAudioScopeTwentyFrames(): void;
     static selectAudioScopeFiftyFrames(): void;
     static getScopeInput(): Array<number>;
     static getScopeOutputLeft(): Array<number>;
     static getScopeOutputRight(): Array<number>;
     static getTriggerInput(): Array<number>;
     static getTriggerOutputLeft(): Array<number>;
     static getTriggerOutputRight(): Array<number>;
     static setLocalEcho(): void;
     static setServerEcho(): void;
     static pauseChanged: Signal;
     static triggered: Signal;
     scopeInput: number;
     scopeOutputLeft: number;
     scopeOutputRight: number;
     triggerInput: number;
     triggerOutputLeft: number;
     triggerOutputRight: number;
}

declare type AvatarData = Avatar;

declare type RayToAvatarIntersectionResult = any;

declare class AvatarManager {
     static getAvatar(avatarID: Uuid): AvatarData;
     static getAvatarDataRate(sessionID: Uuid, rateName: string): number;
     static getAvatarUpdateRate(sessionID: Uuid, rateName: string): number;
     static getAvatarSimulationRate(sessionID: Uuid, rateName: string): number;
     static findRayIntersection(ray: PickRay, avatarsToInclude: Array<Uuid>, avatarsToDiscard: Array<Uuid>): RayToAvatarIntersectionResult;
     static findRayIntersectionVector(ray: PickRay, avatarsToInclude: Array<Uuid>, avatarsToDiscard: Array<Uuid>): RayToAvatarIntersectionResult;
     static getAvatarSortCoefficient(name: string): number;
     static setAvatarSortCoefficient(name: string, value: number): void;
     static getPalData(specificAvatarIdentifiers: Array<string>): object;
     static updateAvatarRenderStatus(shouldRenderAvatars: boolean): void;
     static getAvatarIdentifiers(): Array<Uuid>;
     static getAvatarsInRange(position: Vec3, range: number): Array<Uuid>;
     static avatarAddedEvent: Signal;
     static avatarRemovedEvent: Signal;
     static avatarSessionChangedEvent: Signal;
     static isAvatarInRange(position: string, range: string): boolean;
     static sessionUUIDChanged(sessionUUID: Uuid, oldSessionUUID: Uuid): void;
     static processAvatarDataPacket(message: string, sendingNode: Uuid): void;
     static processAvatarIdentityPacket(message: string, sendingNode: Uuid): void;
     static processKillAvatar(message: string, sendingNode: Uuid): void;
}

declare type DriveKeys = string;

declare class MyAvatar {
     static resetSensorsAndBody(): void;
     static centerBody(): void;
     static clearIKJointLimitHistory(): void;
     static setOrientationVar(newOrientationVar: object): void;
     static getOrientationVar(): object;
     static getDefaultEyePosition(): Vec3;
     static overrideAnimation(url: string, fps: number, loop: boolean, firstFrame: number, lastFrame: number): void;
     static restoreAnimation(): void;
     static getAnimationRoles(): Array<string>;
     static overrideRoleAnimation(role: string, url: string, fps: number, loop: boolean, firstFrame: number, lastFrame: number): void;
     static restoreRoleAnimation(role: string): void;
     static removeAnimationStateHandler(handler: number): void;
     static getSnapTurn(): boolean;
     static setSnapTurn(on: boolean): void;
     static setDominantHand(hand: string): void;
     static getDominantHand(): string;
     static setCenterOfGravityModelEnabled(enabled: boolean): void;
     static getCenterOfGravityModelEnabled(): boolean;
     static setHMDLeanRecenterEnabled(enabled: boolean): void;
     static getHMDLeanRecenterEnabled(): boolean;
     static requestEnableHandTouch(): void;
     static requestDisableHandTouch(): void;
     static disableHandTouchForID(entityID: Uuid): void;
     static enableHandTouchForID(entityID: Uuid): void;
     static getRawDriveKey(key: DriveKeys): number;
     static disableDriveKey(key: DriveKeys): void;
     static enableDriveKey(key: DriveKeys): void;
     static isDriveKeyDisabled(key: DriveKeys): boolean;
     static triggerVerticalRecenter(): void;
     static triggerRotationRecenter(): void;
     static isRecenteringHorizontally(): void;
     static getHeadPosition(): Vec3;
     static getHeadFinalYaw(): number;
     static getHeadFinalRoll(): number;
     static getHeadFinalPitch(): number;
     static getHeadDeltaPitch(): number;
     static getEyePosition(): Vec3;
     static getTargetAvatarPosition(): Vec3;
     static getTargetAvatar(): AvatarData;
     static getLeftHandPosition(): Vec3;
     static getRightHandPosition(): Vec3;
     static getLeftHandTipPosition(): Vec3;
     static getRightHandTipPosition(): Vec3;
     static getLeftHandPose(): Pose;
     static getRightHandPose(): Pose;
     static getLeftHandTipPose(): Pose;
     static getRightHandTipPose(): Pose;
     static worldToJointPoint(position: Vec3, jointIndex: number): Vec3;
     static worldToJointDirection(direction: Vec3, jointIndex: number): Vec3;
     static worldToJointRotation(rotation: Quat, jointIndex: number): Quat;
     static jointToWorldPoint(position: Vec3, jointIndex: number): Vec3;
     static jointToWorldDirection(direction: Vec3, jointIndex: number): Vec3;
     static jointToWorldRotation(rotation: Quat, jointIndex: number): Quat;
     static pinJoint(index: number, position: Vec3, orientation: Quat): boolean;
     static clearPinOnJoint(index: number): boolean;
     static getIKErrorOnLastSolve(): number;
     static useFullAvatarURL(fullAvatarURL: string, modelName: string): void;
     static getFullAvatarURLFromPreferences(): string;
     static getFullAvatarModelName(): string;
     static getAvatarEntitiesVariant(): Array<object>;
     static isFlying(): boolean;
     static isInAir(): boolean;
     static setFlyingEnabled(enabled: boolean): void;
     static getFlyingEnabled(): boolean;
     static setFlyingDesktopPref(enabled: boolean): void;
     static getFlyingDesktopPref(): boolean;
     static setFlyingDesktopPref(enabled: boolean): void;
     static getFlyingDesktopPref(): boolean;
     static getAvatarScale(): number;
     static setAvatarScale(scale: number): void;
     static setCollisionsEnabled(enabled: boolean): void;
     static getCollisionsEnabled(): boolean;
     static getCollisionCapsule(): object;
     static setCharacterControllerEnabled(enabled: boolean): void;
     static getCharacterControllerEnabled(): boolean;
     static isUp(direction: Vec3): boolean;
     static isDown(direction: Vec3): boolean;
     static increaseSize(): void;
     static decreaseSize(): void;
     static resetSize(): void;
     static animGraphLoaded(): void;
     static setGravity(gravity: number): void;
     static getGravity(): number;
     static goToFeetLocation(position: Vec3, hasOrientation: boolean, orientation: Quat, shouldFaceLocation: boolean): void;
     static goToLocation(position: Vec3, hasOrientation: boolean, orientation: Quat, shouldFaceLocation: boolean, withSafeLanding: boolean): void;
     static goToLocation(properties: object): void;
     static goToLocationAndEnableCollisions(position: Vec3): void;
     static safeLanding(position: Vec3): boolean;
     static restrictScaleFromDomainSettings(domainSettingsObject: object): void;
     static clearScaleRestriction(): void;
     static addThrust(thrust: Vec3): void;
     static getThrust(): Vec3;
     static setThrust(thrust: Vec3): void;
     static updateMotionBehaviorFromMenu(): void;
     static setToggleHips(enabled: boolean): void;
     static setEnableDebugDrawBaseOfSupport(enabled: boolean): void;
     static setEnableDebugDrawDefaultPose(enabled: boolean): void;
     static setEnableDebugDrawAnimPose(enabled: boolean): void;
     static setEnableDebugDrawPosition(enabled: boolean): void;
     static setEnableDebugDrawHandControllers(enabled: boolean): void;
     static setEnableDebugDrawSensorToWorldMatrix(enabled: boolean): void;
     static setEnableDebugDrawIKTargets(enabled: boolean): void;
     static setEnableDebugDrawIKConstraints(enabled: boolean): void;
     static setEnableDebugDrawIKChains(enabled: boolean): void;
     static setEnableDebugDrawDetailedCollision(enabled: boolean): void;
     static getEnableMeshVisible(): boolean;
     static setEnableMeshVisible(visible: boolean): void;
     static setEnableInverseKinematics(enabled: boolean): void;
     static getAnimGraphOverrideUrl(): string;
     static setAnimGraphOverrideUrl(url: string): void;
     static getAnimGraphUrl(): string;
     static setAnimGraphUrl(url: string): void;
     static getPositionForAudio(): Vec3;
     static getOrientationForAudio(): Quat;
     static setModelScale(scale: number): void;
     static audioListenerModeChanged: Signal;
     static transformChanged: Signal;
     static newCollisionSoundURL: Signal;
     static collisionWithEntity: Signal;
     static collisionsEnabledChanged: Signal;
     static animGraphUrlChanged: Signal;
     static energyChanged: Signal;
     static positionGoneTo: Signal;
     static onLoadComplete: Signal;
     static wentAway: Signal;
     static wentActive: Signal;
     static skeletonChanged: Signal;
     static dominantHandChanged: Signal;
     static sensorToWorldScaleChanged: Signal;
     static attachmentsChanged: Signal;
     static scaleChanged: Signal;
     static shouldDisableHandTouchChanged: Signal;
     static disableHandTouchForIDChanged: Signal;
     static getDomainMinScale(): number;
     static getDomainMaxScale(): number;
     static getEyeHeight(): number;
     static getHeight(): number;
     static setHandState(state: string): void;
     static getHandState(): string;
     static setRawJointData(data: Array<JointData>): void;
     static setJointData(index: number, rotation: Quat, translation: Vec3): void;
     static setJointRotation(index: number, rotation: Quat): void;
     static setJointTranslation(index: number, translation: Vec3): void;
     static clearJointData(index: number): void;
     static isJointDataValid(index: number): boolean;
     static getJointRotation(index: number): Quat;
     static getJointTranslation(index: number): Vec3;
     static setJointData(name: string, rotation: Quat, translation: Vec3): void;
     static setJointRotation(name: string, rotation: Quat): void;
     static setJointTranslation(name: string, translation: Vec3): void;
     static clearJointData(name: string): void;
     static isJointDataValid(name: string): boolean;
     static getJointRotation(name: string): Quat;
     static getJointTranslation(name: number): Vec3;
     static getJointRotations(): Array<Quat>;
     static getJointTranslations(): Array<Vec3>;
     static setJointRotations(jointRotations: Array<Quat>): void;
     static setJointTranslations(translations: Array<Vec3>): void;
     static clearJointsData(): void;
     static getJointIndex(name: string): number;
     static getJointNames(): Array<string>;
     static setBlendshape(name: string, value: number): void;
     static getAttachmentsVariant(): object;
     static setAttachmentsVariant(variant: object): void;
     static updateAvatarEntity(entityID: Uuid, entityData: string): void;
     static clearAvatarEntity(entityID: Uuid): void;
     static setForceFaceTrackerConnected(connected: boolean): void;
     static getAttachmentData(): Array<AttachmentData>;
     static setAttachmentData(attachmentData: Array<AttachmentData>): void;
     static attach(modelURL: string, jointName: string, translation: Vec3, rotation: Quat, scale: number, isSoft: boolean, allowDuplicates: boolean, useSaved: boolean): void;
     static detachOne(modelURL: string, jointName: string): void;
     static detachAll(modelURL: string, jointName: string): void;
     static getAvatarEntityData(): object;
     static setAvatarEntityData(avatarEntityData: object): void;
     static getSensorToWorldMatrix(): Mat4;
     static getSensorToWorldScale(): number;
     static getControllerLeftHandMatrix(): Mat4;
     static getControllerRightHandMatrix(): Mat4;
     static getDataRate(rateName: string): number;
     static getUpdateRate(rateName: string): number;
     static displayNameChanged: Signal;
     static sessionDisplayNameChanged: Signal;
     static skeletonModelURLChanged: Signal;
     static lookAtSnappingChanged: Signal;
     static sessionUUIDChanged: Signal;
     static sendAvatarDataPacket(sendAll: boolean): void;
     static sendIdentityPacket(): void;
     static setJointMappingsFromNetworkReply(): void;
     static setSessionUUID(sessionUUID: Uuid): void;
     static getAbsoluteJointRotationInObjectFrame(index: number): Quat;
     static getAbsoluteJointTranslationInObjectFrame(index: number): Vec3;
     static setAbsoluteJointRotationInObjectFrame(index: number, rotation: Quat): boolean;
     static setAbsoluteJointTranslationInObjectFrame(index: number, translation: Vec3): boolean;
     static getTargetScale(): number;
     static resetLastSent(): void;
     static getDefaultJointRotation(index: number): Quat;
     static getDefaultJointTranslation(index: number): Vec3;
     static getAbsoluteDefaultJointRotationInObjectFrame(index: number): Quat;
     static getAbsoluteDefaultJointTranslationInObjectFrame(index: number): Vec3;
     static setSkeletonOffset(offset: Vec3): void;
     static getSkeletonOffset(): Vec3;
     static getJointPosition(index: number): Vec3;
     static getJointPosition(name: string): Vec3;
     static getNeckPosition(): Vec3;
     static getAcceleration(): Vec3;
     static getWorldFeetPosition(): Vec3;
     static getParentID(): Uuid;
     static setParentID(parentID: Uuid): void;
     static getParentJointIndex(): number;
     static setParentJointIndex(parentJointIndex: number): void;
     static getSkeleton(): Array<SkeletonJoint>;
     static getSimulationRate(rateName: string): number;
     static getLeftPalmPosition(): Vec3;
     static getLeftPalmRotation(): Quat;
     static getRightPalmPosition(): Vec3;
     static getRightPalmRotation(): Quat;
     static rigReady: Signal;
     static rigReset: Signal;
     qmlPosition: Vec3;
     shouldRenderLocally: boolean;
     motorVelocity: Vec3;
     motorTimescale: number;
     motorReferenceFrame: string;
     motorMode: string;
     collisionSoundURL: string;
     audioListenerMode: number;
     audioListenerModeHead: number;
     audioListenerModeCamera: number;
     audioListenerModeCustom: number;
     hasScriptedBlendshapes: boolean;
     hasProceduralBlinkFaceMovement: boolean;
     hasProceduralEyeFaceMovement: boolean;
     hasAudioEnabledFaceMovement: boolean;
     customListenPosition: Vec3;
     customListenOrientation: Quat;
     leftHandPosition: Vec3;
     rightHandPosition: Vec3;
     leftHandTipPosition: Vec3;
     rightHandTipPosition: Vec3;
     leftHandPose: Pose;
     rightHandPose: Pose;
     leftHandTipPose: Pose;
     rightHandTipPose: Pose;
     centerOfGravityModelEnabled: boolean;
     hmdLeanRecenterEnabled: boolean;
     collisionsEnabled: boolean;
     characterControllerEnabled: boolean;
     useAdvancedMovementControls: boolean;
     showPlayArea: boolean;
     yawSpeed: number;
     pitchSpeed: number;
     hmdRollControlEnabled: boolean;
     hmdRollControlDeadZone: number;
     hmdRollControlRate: number;
     userHeight: number;
     userEyeHeight: number;
     static readonly SELF_ID: Uuid;
     walkSpeed: number;
     walkBackwardSpeed: number;
     sprintSpeed: number;
     skeletonOffset: Vec3;
     position: Vec3;
     scale: number;
     density: number;
     handPosition: Vec3;
     bodyYaw: number;
     bodyPitch: number;
     bodyRoll: number;
     orientation: Quat;
     headOrientation: Quat;
     headPitch: number;
     headYaw: number;
     headRoll: number;
     velocity: Vec3;
     angularVelocity: Vec3;
     audioLoudness: number;
     audioAverageLoudness: number;
     displayName: string;
     sessionDisplayName: string;
     lookAtSnappingEnabled: boolean;
     skeletonModelURL: string;
     attachmentData: Array<AttachmentData>;
     jointNames: Array<string>;
     sessionUUID: Uuid;
     sensorToWorldMatrix: Mat4;
     controllerLeftHandMatrix: Mat4;
     controllerRightHandMatrix: Mat4;
     sensorToWorldScale: number;
}

declare class SkeletonJoint {
     name: string;
     index: number;
     parentIndex: number;
}

declare class FaceTracker {
     static setEnabled(enabled: boolean): void;
     static calibrate(): void;
     static muteToggled: Signal;
     static toggleMute(): void;
     static getMuted(): boolean;
}

declare class LaserPointers {
     static createLaserPointer(properties: Pointers.LaserPointerProperties): number;
     static enableLaserPointer(id: number): void;
     static disableLaserPointer(id: number): void;
     static removeLaserPointer(id: number): void;
     static editRenderState(id: number, renderState: string, properties: Pointers.RayPointerRenderState): void;
     static setRenderState(renderState: string, id: number): void;
     static getPrevRayPickResult(id: number): RayPickResult;
     static setPrecisionPicking(id: number, precisionPicking: boolean): void;
     static setLaserLength(id: number, laserLength: number): void;
     static setIgnoreItems(id: number, ignoreItems: Array<Uuid>): void;
     static setIncludeItems(id: number, includeItems: Array<Uuid>): void;
     static setLockEndUUID(id: number, itemID: Uuid, isOverlay: boolean, offsetMat: Mat4): void;
     static isLeftHand(id: number): boolean;
     static isRightHand(id: number): boolean;
     static isMouse(id: number): boolean;
}

declare class Picks {
     static createPick(type: PickType, properties: Picks.RayPickProperties): number;
     static enablePick(uid: number): void;
     static disablePick(uid: number): void;
     static removePick(uid: number): void;
     static getPrevPickResult(uid: number): RayPickResult;
     static setPrecisionPicking(uid: number, precisionPicking: boolean): void;
     static setIgnoreItems(uid: number, ignoreItems: Array<Uuid>): void;
     static setIncludeItems(uid: number, includeItems: Array<Uuid>): void;
     static isLeftHand(uid: number): boolean;
     static isRightHand(uid: number): boolean;
     static isMouse(uid: number): boolean;
     static readonly PICK_NOTHING: number;
     static readonly PICK_ENTITIES: number;
     static readonly PICK_OVERLAYS: number;
     static readonly PICK_AVATARS: number;
     static readonly PICK_HUD: number;
     static readonly PICK_COARSE: number;
     static readonly PICK_INCLUDE_INVISIBLE: number;
     static readonly PICK_INCLUDE_NONCOLLIDABLE: number;
     static readonly PICK_ALL_INTERSECTIONS: number;
     static readonly INTERSECTED_NONE: number;
     static readonly INTERSECTED_ENTITY: number;
     static readonly INTERSECTED_OVERLAY: number;
     static readonly INTERSECTED_AVATAR: number;
     static readonly INTERSECTED_HUD: number;
     perFrameTimeBudget: number;
}

declare namespace Picks {
     class RayPickProperties {
          enabled: boolean;
          filter: number;
          maxDistance: number;
          parentID: Uuid;
          parentJointIndex: number;
          joint: string;
          posOffset: Vec3;
          dirOffset: Vec3;
          position: Vec3;
          direction: Vec3;
     }
     class StylusPickProperties {
          hand: number;
          enabled: boolean;
          filter: number;
          maxDistance: number;
     }
     class ParabolaPickProperties {
          enabled: boolean;
          filter: number;
          maxDistance: number;
          parentID: Uuid;
          parentJointIndex: number;
          joint: string;
          posOffset: Vec3;
          dirOffset: Vec3;
          position: Vec3;
          direction: Vec3;
          speed: number;
          accelerationAxis: Vec3;
          rotateAccelerationWithAvatar: boolean;
          rotateAccelerationWithParent: boolean;
          scaleWithParent: boolean;
     }
     class CollisionPickProperties {
          enabled: boolean;
          filter: number;
          shape: Shape;
          position: Vec3;
          orientation: Quat;
          threshold: number;
          collisionGroup: CollisionMask;
          parentID: Uuid;
          parentJointIndex: number;
          joint: string;
          scaleWithParent: boolean;
     }
}

declare class Pointers {
     static createPointer(type: PickType, properties: Pointers.LaserPointerProperties): number;
     static enablePointer(uid: number): void;
     static disablePointer(uid: number): void;
     static removePointer(uid: number): void;
     static editRenderState(uid: number, renderState: string, properties: Pointers.RayPointerRenderState): void;
     static setRenderState(uid: number, renderState: string): void;
     static getPrevPickResult(uid: number): RayPickResult;
     static setPrecisionPicking(uid: number, precisionPicking: boolean): void;
     static setLength(uid: number, length: number): void;
     static setIgnoreItems(uid: number, ignoreItems: Array<Uuid>): void;
     static setIncludeItems(uid: number, includeItems: Array<Uuid>): void;
     static setLockEndUUID(uid: number, objectID: Uuid, isOverlay: boolean, offsetMat: Mat4): void;
     static isLeftHand(uid: number): boolean;
     static isRightHand(uid: number): boolean;
     static isMouse(uid: number): boolean;
     static getPointerProperties(uid: number): Pointers.LaserPointerProperties;
}

declare namespace Pointers {
     class StylusPointerProperties {
          hover: boolean;
          enabled: boolean;
     }
     class DefaultRayPointerRenderState {
          distance: number;
     }
     class RayPointerRenderState {
          name: string;
          start: Overlays.OverlayProperties;
          path: Overlays.OverlayProperties;
          end: Overlays.OverlayProperties;
     }
     class LaserPointerProperties {
          faceAvatar: boolean;
          centerEndY: boolean;
          lockEnd: boolean;
          distanceScaleEnd: boolean;
          scaleWithParent: boolean;
          followNormal: boolean;
          followNormalStrength: number;
          enabled: boolean;
          renderStates: Array<Pointers.RayPointerRenderState>;
          defaultRenderStates: Array<Pointers.DefaultRayPointerRenderState>;
          hover: boolean;
          triggers: Array<Pointers.Trigger>;
     }
     class ParabolaProperties {
          color: Color;
          alpha: number;
          width: number;
          isVisibleInSecondaryCamera: boolean;
          drawInFront: boolean;
     }
     class DefaultParabolaPointerRenderState {
          distance: number;
     }
     class ParabolaPointerRenderState {
          name: string;
          start: Overlays.OverlayProperties;
          path: Pointers.ParabolaProperties;
          end: Overlays.OverlayProperties;
     }
     class ParabolaPointerProperties {
          faceAvatar: boolean;
          centerEndY: boolean;
          lockEnd: boolean;
          distanceScaleEnd: boolean;
          scaleWithParent: boolean;
          followNormal: boolean;
          followNormalStrength: number;
          enabled: boolean;
          renderStates: Array<Pointers.ParabolaPointerRenderState>;
          defaultRenderStates: Array<Pointers.DefaultParabolaPointerRenderState>;
          hover: boolean;
          triggers: Array<Pointers.Trigger>;
     }
     class Trigger {
          action: Controller.Standard;
          button: string;
     }
}

declare class RayPick {
     static createRayPick(undefined: Picks.RayPickProperties): number;
     static enableRayPick(id: number): void;
     static disableRayPick(id: number): void;
     static removeRayPick(id: number): void;
     static getPrevRayPickResult(id: number): RayPickResult;
     static setPrecisionPicking(id: number, precisionPicking: boolean): void;
     static setIgnoreItems(id: number, items: Uuid[]): void;
     static setIncludeItems(id: number, items: Uuid[]): void;
     static isLeftHand(id: number): boolean;
     static isRightHand(id: number): boolean;
     static isMouse(id: number): boolean;
     static readonly PICK_NOTHING: number;
     static readonly PICK_ENTITIES: number;
     static readonly PICK_OVERLAYS: number;
     static readonly PICK_AVATARS: number;
     static readonly PICK_HUD: number;
     static readonly PICK_COARSE: number;
     static readonly PICK_INCLUDE_INVISIBLE: number;
     static readonly PICK_INCLUDE_NONCOLLIDABLE: number;
     static readonly PICK_ALL_INTERSECTIONS: number;
     static readonly INTERSECTED_NONE: number;
     static readonly INTERSECTED_ENTITY: number;
     static readonly INTERSECTED_OVERLAY: number;
     static readonly INTERSECTED_AVATAR: number;
     static readonly INTERSECTED_HUD: number;
}

declare type DownloadInfoResult = any;

declare class AccountServices {
     static getDownloadInfo(): DownloadInfoResult;
     static updateDownloadInfo(): void;
     static isLoggedIn(): boolean;
     static checkAndSignalForAccessToken(): boolean;
     static logOut(): void;
     static connected: Signal;
     static disconnected: Signal;
     static myUsernameChanged: Signal;
     static downloadInfoChanged: Signal;
     static findableByChanged: Signal;
     static loggedInChanged: Signal;
     username: string;
     loggedIn: boolean;
     findableBy: string;
     metaverseServerURL: string;
}

declare class Audio {
     static setInputDevice(device: object, isHMD: boolean): void;
     static setOutputDevice(device: object, isHMD: boolean): void;
     static setReverb(enable: boolean): void;
     static setReverbOptions(options: AudioEffectOptions): void;
     static startRecording(filename: string): boolean;
     static stopRecording(): void;
     static getRecording(): boolean;
     static nop: Signal;
     static mutedChanged: Signal;
     static noiseReductionChanged: Signal;
     static inputVolumeChanged: Signal;
     static inputLevelChanged: Signal;
     static contextChanged: Signal;
     static onContextChanged(): void;
     static playSound(sound: SoundObject, injectorOptions: AudioInjector.AudioInjectorOptions): AudioInjector;
     static playSystemSound(sound: SoundObject, position: Vec3): AudioInjector;
     static setStereoInput(stereo: boolean): void;
     static isStereoInput(): boolean;
     static mutedByMixer: Signal;
     static environmentMuted: Signal;
     static receivedFirstPacket: Signal;
     static disconnected: Signal;
     static noiseGateOpened: Signal;
     static noiseGateClosed: Signal;
     static inputReceived: Signal;
     static isStereoInputChanged: Signal;
     muted: boolean;
     noiseReduction: boolean;
     inputLevel: number;
     inputVolume: number;
     isStereoInput: boolean;
     context: string;
     devices: object;
}

declare class Clipboard {
     static getContentsDimensions(): Vec3;
     static getClipboardContentsLargestDimension(): number;
     static importEntities(filename: string): boolean;
     static exportEntities(filename: string, entityIDs: Array<Uuid>): boolean;
     static exportEntities(filename: string, x: number, y: number, z: number, scale: number): boolean;
     static pasteEntities(position: Vec3): Array<Uuid>;
}

declare type Action = any;

declare type NamedPair = any;

declare class Controller {
     static captureKeyEvents(event: KeyEvent): void;
     static releaseKeyEvents(event: KeyEvent): void;
     static captureJoystick(joystickID: number): void;
     static releaseJoystick(joystickID: number): void;
     static captureEntityClickEvents(): void;
     static releaseEntityClickEvents(): void;
     static getViewportDimensions(): Vec2;
     static getRecommendedHUDRect(): Rect;
     static setVPadEnabled(enable: boolean): void;
     static setVPadHidden(hidden: boolean): void;
     static setVPadExtraBottomMargin(margin: number): void;
     static keyPressEvent: Signal;
     static keyReleaseEvent: Signal;
     static mouseMoveEvent: Signal;
     static mousePressEvent: Signal;
     static mouseDoublePressEvent: Signal;
     static mouseReleaseEvent: Signal;
     static touchBeginEvent: Signal;
     static touchEndEvent: Signal;
     static touchUpdateEvent: Signal;
     static wheelEvent: Signal;
     static getAllActions(): Array<Action>;
     static getAvailableInputs(deviceID: number): Array<NamedPair>;
     static getDeviceName(deviceID: number): string;
     static getActionValue(actionID: number): number;
     static findDevice(deviceName: string): number;
     static getDeviceNames(): Array<string>;
     static findAction(actionName: string): number;
     static getActionNames(): Array<string>;
     static getValue(source: number): number;
     static getAxisValue(source: number): number;
     static getPoseValue(source: number): Pose;
     static triggerHapticPulse(strength: number, duration: number, hand: Controller.Hand): void;
     static triggerShortHapticPulse(strength: number, hand: Controller.Hand): void;
     static triggerHapticPulseOnDevice(deviceID: number, strength: number, duration: number, hand: Controller.Hand): void;
     static triggerShortHapticPulseOnDevice(deviceID: number, strength: number, hand: Controller.Hand): void;
     static newMapping(mappingName: string): MappingObject;
     static enableMapping(mappingName: string, enable: boolean): void;
     static disableMapping(mappingName: string): void;
     static parseMapping(jsonString: string): MappingObject;
     static loadMapping(jsonURL: string): MappingObject;
     static getHardware(): Controller.Hardware;
     static getActions(): Controller.Actions;
     static getStandard(): Controller.Standard;
     static startInputRecording(): void;
     static stopInputRecording(): void;
     static startInputPlayback(): void;
     static stopInputPlayback(): void;
     static saveInputRecording(): void;
     static loadInputRecording(file: string): void;
     static getInputRecorderSaveDirectory(): string;
     static getRunningInputDevices(): Array<string>;
     static captureMouseEvents(): void;
     static releaseMouseEvents(): void;
     static captureTouchEvents(): void;
     static releaseTouchEvents(): void;
     static captureWheelEvents(): void;
     static releaseWheelEvents(): void;
     static captureActionEvents(): void;
     static releaseActionEvents(): void;
     static actionEvent: Signal;
     static inputEvent: Signal;
     static hardwareChanged: Signal;
     static deviceRunningChanged: Signal;
}

declare namespace Controller {
     class Hand {
     }
     class Actions {
     }
     class Hardware {
     }
     class Standard {
     }
     class MappingJSON {
          name: string;
          channels: Array<Controller.MappingJSONRoute>;
     }
     class MappingJSONRoute {
          from: string;
          peek: boolean;
          debug: boolean;
          when: string;
          filters: Controller.MappingJSONFilter;
          to: string;
     }
     class MappingJSONAxis {
          makeAxis: Array<Array<string>>;
     }
     class MappingJSONFilter {
          type: string;
          optional1?: string;
          optional2?: string;
     }
     class Application {
     }
     class HardwareKeyboard {
     }
     class HardwareOculusTouch {
     }
     class HardwareVive {
     }
}

declare class Desktop {
     width: number;
     height: number;
     static readonly ALWAYS_ON_TOP: number;
     static readonly CLOSE_BUTTON_HIDES: number;
}

declare class GooglePoly {
     static setAPIKey(key: string): void;
     static getAssetList(keyword: string, category: string, format: string): string;
     static getFBX(keyword: string, category: string): string;
     static getOBJ(keyword: string, category: string): string;
     static getBlocks(keyword: string, category: string): string;
     static getGLTF(keyword: string, category: string): string;
     static getGLTF2(keyword: string, category: string): string;
     static getTilt(keyword: string, category: string): string;
     static getModelInfo(input: string): string;
}

declare class HMD {
     static calculateRayUICollisionPoint(position: Vec3, direction: Vec3): Vec3;
     static overlayFromWorldPoint(position: Vec3): Vec2;
     static worldPointFromOverlay(coordinates: Vec2): Vec3;
     static sphericalToOverlay(sphericalPos: Vec2): Vec2;
     static overlayToSpherical(overlayPos: Vec2): Vec2;
     static centerUI(): void;
     static preferredAudioInput(): string;
     static preferredAudioOutput(): string;
     static isHMDAvailable(name: string): boolean;
     static isHeadControllerAvailable(name: string): boolean;
     static isHandControllerAvailable(name: string): boolean;
     static isSubdeviceContainingNameAvailable(name: string): boolean;
     static requestShowHandControllers(): void;
     static requestHideHandControllers(): void;
     static shouldShowHandControllers(): boolean;
     static activateHMDHandMouse(): void;
     static deactivateHMDHandMouse(): void;
     static suppressKeyboard(): boolean;
     static unsuppressKeyboard(): void;
     static isKeyboardVisible(): boolean;
     static closeTablet(): void;
     static openTablet(contextualMode: boolean): void;
     static shouldShowHandControllersChanged: Signal;
     static IPDScaleChanged: Signal;
     static displayModeChanged: Signal;
     static mountedChanged: Signal;
     position: Vec3;
     orientation: Quat;
     active: boolean;
     mounted: boolean;
     playerHeight: number;
     eyeHeight: number;
     ipd: number;
     ipdScale: number;
     showTablet: boolean;
     tabletContextualMode: boolean;
     tabletID: Uuid;
     tabletScreenID: Uuid;
     homeButtonID: Uuid;
     homeButtonHighlightID: Uuid;
     miniTabletID: Uuid;
     miniTabletScreenID: Uuid;
     miniTabletHand: number;
     playArea: Rect;
     sensorPositions: Array<Vec3>;
}

declare class Menu {
     static addMenu(menuName: string, grouping: string): void;
     static removeMenu(menuName: string): void;
     static menuExists(menuName: string): boolean;
     static addSeparator(menuName: string, separatorName: string): void;
     static removeSeparator(menuName: string, separatorName: string): void;
     static addMenuItem(properties: Menu.MenuItemProperties): void;
     static addMenuItem(menuName: string, menuItem: string, shortcutKey: string): void;
     static removeMenuItem(menuName: string, menuItem: string): void;
     static menuItemExists(menuName: string, menuItem: string): boolean;
     static isOptionChecked(menuOption: string): boolean;
     static setIsOptionChecked(menuOption: string, isChecked: boolean): void;
     static triggerOption(menuOption: string): void;
     static isMenuEnabled(menuName: string): boolean;
     static setMenuEnabled(menuName: string, isEnabled: boolean): void;
     static menuItemEvent: Signal<(menuItem: string) => void>;
}

declare namespace Menu {
     class MenuItemProperties {
          menuName: string;
          menuItemName: string;
          isCheckable?: boolean;
          isChecked?: boolean;
          isSeparator?: boolean;
          shortcutKey?: string;
          shortcutKeyEvent?: KeyEvent;
          position?: number;
          beforeItem?: string;
          afterItem?: string;
          grouping?: string;
     }
}

declare class Selection {
     static getListNames(): Array<string>;
     static removeListFromMap(listName: string): boolean;
     static addToSelectedItemsList(listName: string, itemType: Selection.ItemType, id: Uuid): boolean;
     static removeFromSelectedItemsList(listName: string, itemType: Selection.ItemType, id: Uuid): boolean;
     static clearSelectedItemsList(listName: string): boolean;
     static printList(listName: string): void;
     static getSelectedItemsList(listName: string): Selection.SelectedItemsList;
     static getHighlightedListNames(): Array<string>;
     static enableListHighlight(listName: string, highlightStyle: Selection.HighlightStyle): boolean;
     static disableListHighlight(listName: string): boolean;
     static enableListToScene(listName: string): boolean;
     static disableListToScene(listName: string): boolean;
     static getListHighlightStyle(listName: string): Selection.HighlightStyle;
     static selectedItemsListChanged: Signal;
}

declare namespace Selection {
     class SelectedItemsList {
          avatars: Array<Uuid>;
          entities: Array<Uuid>;
          overlays: Array<Uuid>;
     }
     class HighlightStyle {
          outlineUnoccludedColor: Color;
          outlineOccludedColor: Color;
          fillUnoccludedColor: Color;
          fillOccludedColor: Color;
          outlineUnoccludedAlpha: number;
          outlineOccludedAlpha: number;
          fillUnoccludedAlpha: number;
          fillOccludedAlpha: number;
          outlineWidth: number;
          isOutlineSmooth: boolean;
     }
}

declare class Settings {
     static getValue(key: string, defaultValue: string): string;
     static setValue(key: string, value: string): void;
}

declare class Wallet {
     static refreshWalletStatus(): void;
     static getWalletStatus(): number;
     static proveAvatarEntityOwnershipVerification(entityID: Uuid): void;
     static walletStatusChanged: Signal;
     static walletNotSetup: Signal;
     static ownershipVerificationSuccess: Signal;
     static ownershipVerificationFailed: Signal;
     walletStatus: number;
}

declare class Window {
     static hasFocus(): boolean;
     static setFocus(): void;
     static raise(): void;
     static alert(message: string): void;
     static confirm(message: string): boolean;
     static prompt(message: string, defaultText: string): string;
     static promptAsync(message: string, defaultText: string): void;
     static browseDir(title: string, directory: string): string;
     static browseDirAsync(title: string, directory: string): void;
     static browse(title: string, directory: string, nameFilter: string): string;
     static browseAsync(title: string, directory: string, nameFilter: string): void;
     static save(title: string, directory: string, nameFilter: string): string;
     static saveAsync(title: string, directory: string, nameFilter: string): void;
     static browseAssets(title: string, directory: string, nameFilter: string): string;
     static browseAssetsAsync(title: string, directory: string, nameFilter: string): void;
     static showAssetServer(uploadFile: string): void;
     static checkVersion(): string;
     static protocolSignature(): string;
     static copyToClipboard(text: string): void;
     static takeSnapshot(notify: boolean, includeAnimated: boolean, aspectRatio: number, filename: string): void;
     static takeSecondaryCameraSnapshot(notify: boolean, filename: string): void;
     static takeSecondaryCamera360Snapshot(cameraPosition: Vec3, cubemapOutputFormat: boolean, notify: boolean, filename: string): void;
     static makeConnection(success: boolean, description: string): void;
     static displayAnnouncement(message: string): void;
     static shareSnapshot(path: string, href: string): void;
     static isPhysicsEnabled(): boolean;
     static setDisplayTexture(texture: Window.DisplayTexture): boolean;
     static isPointOnDesktopWindow(point: Vec2): boolean;
     static getDeviceSize(): Vec2;
     static getLastDomainConnectionError(): Window.ConnectionRefusedReason;
     static openMessageBox(title: string, text: string, buttons: Window.MessageBoxButton, defaultButton: Window.MessageBoxButton): number;
     static openUrl(url: string): void;
     static openAndroidActivity(activityName: string, backToScene: boolean): void;
     static updateMessageBox(id: number, title: string, text: string, buttons: Window.MessageBoxButton, defaultButton: Window.MessageBoxButton): void;
     static closeMessageBox(id: number): void;
     static domainChanged: Signal;
     static svoImportRequested: Signal;
     static domainConnectionRefused: Signal;
     static redirectErrorStateChanged: Signal;
     static stillSnapshotTaken: Signal;
     static snapshot360Taken: Signal;
     static snapshotShared: Signal;
     static processingGifStarted: Signal;
     static processingGifCompleted: Signal;
     static connectionAdded: Signal;
     static connectionError: Signal;
     static announcement: Signal;
     static messageBoxClosed: Signal;
     static browseDirChanged: Signal;
     static assetsDirChanged: Signal;
     static saveFileChanged: Signal;
     static browseChanged: Signal;
     static promptTextChanged: Signal;
     static geometryChanged: Signal;
     innerWidth: number;
     innerHeight: number;
     location: object;
     x: number;
     y: number;
}

declare namespace Window {
     type DisplayTexture = string;
}

declare class AvatarInputs {
     static loudnessToAudioLevel(loudness: number): number;
     static setShowAudioTools(showAudioTools: boolean): void;
     static cameraEnabledChanged: Signal;
     static cameraMutedChanged: Signal;
     static isHMDChanged: Signal;
     static showAudioToolsChanged: Signal;
     static resetSensors(): void;
     static toggleCameraMute(): void;
     cameraEnabled: boolean;
     cameraMuted: boolean;
     isHMD: boolean;
     showAudioTools: boolean;
}

declare class Snapshot {
     static snapshotLocationSet: Signal;
     static getSnapshotsLocation(): string;
     static setSnapshotsLocation(location: String): void;
}

declare class Stats {
     static longsubmitsChanged: Signal;
     static longrendersChanged: Signal;
     static longframesChanged: Signal;
     static appdroppedChanged: Signal;
     static expandedChanged: Signal;
     static timingExpandedChanged: Signal;
     static serverCountChanged: Signal;
     static renderrateChanged: Signal;
     static presentrateChanged: Signal;
     static presentnewrateChanged: Signal;
     static presentdroprateChanged: Signal;
     static stutterrateChanged: Signal;
     static gameLoopRateChanged: Signal;
     static numPhysicsBodiesChanged: Signal;
     static avatarCountChanged: Signal;
     static updatedAvatarCountChanged: Signal;
     static notUpdatedAvatarCountChanged: Signal;
     static packetInCountChanged: Signal;
     static packetOutCountChanged: Signal;
     static mbpsInChanged: Signal;
     static mbpsOutChanged: Signal;
     static assetMbpsInChanged: Signal;
     static assetMbpsOutChanged: Signal;
     static audioPingChanged: Signal;
     static avatarPingChanged: Signal;
     static entitiesPingChanged: Signal;
     static assetPingChanged: Signal;
     static messagePingChanged: Signal;
     static positionChanged: Signal;
     static speedChanged: Signal;
     static yawChanged: Signal;
     static avatarMixerInKbpsChanged: Signal;
     static avatarMixerInPpsChanged: Signal;
     static avatarMixerOutKbpsChanged: Signal;
     static avatarMixerOutPpsChanged: Signal;
     static myAvatarSendRateChanged: Signal;
     static audioMixerInKbpsChanged: Signal;
     static audioMixerInPpsChanged: Signal;
     static audioMixerOutKbpsChanged: Signal;
     static audioMixerOutPpsChanged: Signal;
     static audioMixerKbpsChanged: Signal;
     static audioMixerPpsChanged: Signal;
     static audioOutboundPPSChanged: Signal;
     static audioSilentOutboundPPSChanged: Signal;
     static audioAudioInboundPPSChanged: Signal;
     static audioSilentInboundPPSChanged: Signal;
     static audioPacketLossChanged: Signal;
     static audioCodecChanged: Signal;
     static audioNoiseGateChanged: Signal;
     static entityPacketsInKbpsChanged: Signal;
     static downloadsChanged: Signal;
     static downloadLimitChanged: Signal;
     static downloadsPendingChanged: Signal;
     static downloadUrlsChanged: Signal;
     static processingChanged: Signal;
     static processingPendingChanged: Signal;
     static trianglesChanged: Signal;
     static drawcallsChanged: Signal;
     static materialSwitchesChanged: Signal;
     static itemConsideredChanged: Signal;
     static itemOutOfViewChanged: Signal;
     static itemTooSmallChanged: Signal;
     static itemRenderedChanged: Signal;
     static shadowConsideredChanged: Signal;
     static shadowOutOfViewChanged: Signal;
     static shadowTooSmallChanged: Signal;
     static shadowRenderedChanged: Signal;
     static sendingModeChanged: Signal;
     static packetStatsChanged: Signal;
     static lodStatusChanged: Signal;
     static serverElementsChanged: Signal;
     static serverInternalChanged: Signal;
     static serverLeavesChanged: Signal;
     static localElementsChanged: Signal;
     static localInternalChanged: Signal;
     static localLeavesChanged: Signal;
     static timingStatsChanged: Signal;
     static gameUpdateStatsChanged: Signal;
     static glContextSwapchainMemoryChanged: Signal;
     static qmlTextureMemoryChanged: Signal;
     static texturePendingTransfersChanged: Signal;
     static gpuBuffersChanged: Signal;
     static gpuBufferMemoryChanged: Signal;
     static gpuTexturesChanged: Signal;
     static gpuTextureMemoryChanged: Signal;
     static gpuTextureResidentMemoryChanged: Signal;
     static gpuTextureFramebufferMemoryChanged: Signal;
     static gpuTextureResourceMemoryChanged: Signal;
     static gpuTextureResourceIdealMemoryChanged: Signal;
     static gpuTextureResourcePopulatedMemoryChanged: Signal;
     static gpuTextureExternalMemoryChanged: Signal;
     static gpuTextureMemoryPressureStateChanged: Signal;
     static gpuFreeMemoryChanged: Signal;
     static gpuFrameTimeChanged: Signal;
     static batchFrameTimeChanged: Signal;
     static engineFrameTimeChanged: Signal;
     static avatarSimulationTimeChanged: Signal;
     static rectifiedTextureCountChanged: Signal;
     static decimatedTextureCountChanged: Signal;
     static parentChanged: Signal;
     static xChanged: Signal;
     static yChanged: Signal;
     static zChanged: Signal;
     static widthChanged: Signal;
     static heightChanged: Signal;
     static opacityChanged: Signal;
     static enabledChanged: Signal;
     static visibleChanged: Signal;
     static visibleChildrenChanged: Signal;
     static stateChanged: Signal;
     static childrenRectChanged: Signal;
     static baselineOffsetChanged: Signal;
     static clipChanged: Signal;
     static focusChanged: Signal;
     static activeFocusChanged: Signal;
     static activeFocusOnTabChanged: Signal;
     static rotationChanged: Signal;
     static scaleChanged: Signal;
     static transformOriginChanged: Signal;
     static smoothChanged: Signal;
     static antialiasingChanged: Signal;
     static implicitWidthChanged: Signal;
     static implicitHeightChanged: Signal;
     static windowChanged: Signal;
     static grabToImage(callback: object, targetSize: Size): boolean;
     static contains(point: Vec2): boolean;
     static mapFromItem(item: object): void;
     static mapToItem(item: object): void;
     static mapFromGlobal(global: object): void;
     static mapToGlobal(global: object): void;
     static forceActiveFocus(reason: number): void;
     static nextItemInFocusChain(forward: boolean): object;
     static childAt(x: number, y: number): object;
     static update(): void;
     static stylusPicksCountChanged: Signal;
     static rayPicksCountChanged: Signal;
     static parabolaPicksCountChanged: Signal;
     static collisionPicksCountChanged: Signal;
     static stylusPicksUpdatedChanged: Signal;
     static rayPicksUpdatedChanged: Signal;
     static parabolaPicksUpdatedChanged: Signal;
     static collisionPicksUpdatedChanged: Signal;
     expanded: boolean;
     timingExpanded: boolean;
     monospaceFont: string;
     serverCount: number;
     renderrate: number;
     presentrate: number;
     stutterrate: number;
     appdropped: number;
     longsubmits: number;
     longrenders: number;
     longframes: number;
     presentnewrate: number;
     presentdroprate: number;
     gameLoopRate: number;
     avatarCount: number;
     physicsObjectCount: number;
     updatedAvatarCount: number;
     notUpdatedAvatarCount: number;
     packetInCount: number;
     packetOutCount: number;
     mbpsIn: number;
     mbpsOut: number;
     assetMbpsIn: number;
     assetMbpsOut: number;
     audioPing: number;
     avatarPing: number;
     entitiesPing: number;
     assetPing: number;
     messagePing: number;
     position: Vec3;
     speed: number;
     yaw: number;
     avatarMixerInKbps: number;
     avatarMixerInPps: number;
     avatarMixerOutKbps: number;
     avatarMixerOutPps: number;
     myAvatarSendRate: number;
     audioMixerInKbps: number;
     audioMixerInPps: number;
     audioMixerOutKbps: number;
     audioMixerOutPps: number;
     audioMixerKbps: number;
     audioMixerPps: number;
     audioOutboundPPS: number;
     audioSilentOutboundPPS: number;
     audioAudioInboundPPS: number;
     audioSilentInboundPPS: number;
     audioPacketLoss: number;
     audioCodec: string;
     audioNoiseGate: string;
     entityPacketsInKbps: number;
     downloads: number;
     downloadLimit: number;
     downloadsPending: number;
     downloadUrls: Array<string>;
     processing: number;
     processingPending: number;
     triangles: number;
     materialSwitches: number;
     itemConsidered: number;
     itemOutOfView: number;
     itemTooSmall: number;
     itemRendered: number;
     shadowConsidered: number;
     shadowOutOfView: number;
     shadowTooSmall: number;
     shadowRendered: number;
     sendingMode: string;
     packetStats: string;
     lodStatus: string;
     timingStats: string;
     gameUpdateStats: string;
     serverElements: number;
     serverInternal: number;
     serverLeaves: number;
     localElements: number;
     localInternal: number;
     localLeaves: number;
     rectifiedTextureCount: number;
     decimatedTextureCount: number;
     gpuBuffers: number;
     gpuBufferMemory: number;
     gpuTextures: number;
     glContextSwapchainMemory: number;
     qmlTextureMemory: number;
     texturePendingTransfers: number;
     gpuTextureMemory: number;
     gpuTextureResidentMemory: number;
     gpuTextureFramebufferMemory: number;
     gpuTextureResourceMemory: number;
     gpuTextureResourceIdealMemory: number;
     gpuTextureResourcePopulatedMemory: number;
     gpuTextureExternalMemory: number;
     gpuTextureMemoryPressureState: string;
     gpuFreeMemory: number;
     gpuFrameTime: number;
     batchFrameTime: number;
     engineFrameTime: number;
     avatarSimulationTime: number;
     x: number;
     y: number;
     z: number;
     width: number;
     height: number;
     opacity: number;
     enabled: boolean;
     visible: boolean;
     state: string;
     anchors: object;
     baselineOffset: number;
     clip: boolean;
     focus: boolean;
     activeFocus: boolean;
     activeFocusOnTab: boolean;
     rotation: number;
     scale: number;
     transformOrigin: number;
     smooth: boolean;
     antialiasing: boolean;
     implicitWidth: number;
     implicitHeight: number;
     layer: object;
     stylusPicksCount: number;
     rayPicksCount: number;
     parabolaPicksCount: number;
     collisionPicksCount: number;
     stylusPicksUpdated: Vec4;
     rayPicksUpdated: Vec4;
     parabolaPicksUpdated: Vec4;
     collisionPicksUpdated: Vec4;
}

declare class Overlays {
     static addOverlay(type: Overlays.OverlayType, properties: Overlays.OverlayProperties): Uuid;
     static cloneOverlay(overlayID: Uuid): Uuid;
     static editOverlay(overlayID: Uuid, properties: Overlays.OverlayProperties): boolean;
     static editOverlays(propertiesById: Map<Uuid, Overlays.OverlayProperties>): boolean;
     static deleteOverlay(overlayID: Uuid): void;
     static getOverlayType(overlayID: Uuid): Overlays.OverlayType;
     static getOverlayObject(overlayID: Uuid): object;
     static getOverlayAtPoint(point: Vec2): Uuid;
     static getProperty(overlayID: Uuid, property: string): object;
     static getProperties(overlayID: Uuid, properties: Array<string>): Overlays.OverlayProperties;
     static getOverlaysProperties(propertiesById: Map<Uuid, Array<string>>): Map<Uuid, Overlays.OverlayProperties>;
     static findRayIntersection(pickRay: PickRay, precisionPicking: boolean, overlayIDsToInclude: Array<Uuid>, overlayIDsToExclude: Array<Uuid>, visibleOnly: boolean, collidableOnly: boolean): Overlays.RayToOverlayIntersectionResult;
     static findOverlays(center: Vec3, radius: number): Array<Uuid>;
     static isLoaded(overlayID: Uuid): boolean;
     static textSize(overlayID: Uuid, text: string): Size;
     static width(): number;
     static height(): number;
     static isAddedOverlay(overlayID: Uuid): boolean;
     static sendMousePressOnOverlay(overlayID: Uuid, event: PointerEvent): void;
     static sendMouseReleaseOnOverlay(overlayID: Uuid, event: PointerEvent): void;
     static sendMouseMoveOnOverlay(overlayID: Uuid, event: PointerEvent): void;
     static sendHoverEnterOverlay(id: Uuid, event: PointerEvent): void;
     static sendHoverOverOverlay(overlayID: Uuid, event: PointerEvent): void;
     static sendHoverLeaveOverlay(overlayID: Uuid, event: PointerEvent): void;
     static getKeyboardFocusOverlay(): Uuid;
     static setKeyboardFocusOverlay(overlayID: Uuid): void;
     static overlayDeleted: Signal;
     static mousePressOnOverlay: Signal;
     static mouseDoublePressOnOverlay: Signal;
     static mouseReleaseOnOverlay: Signal;
     static mouseMoveOnOverlay: Signal;
     static mousePressOffOverlay: Signal;
     static mouseDoublePressOffOverlay: Signal;
     static hoverEnterOverlay: Signal;
     static hoverOverOverlay: Signal;
     static hoverLeaveOverlay: Signal;
     keyboardFocusOverlay: Uuid;
}

declare namespace Overlays {
     type OverlayType = "circle3d" | "cube" | "grid" | "image" | "image3d" |
          "line3d" | "model" | "rectangle" | "rectangle3d" | "shape" | "sphere" |
          "text" | "text3d" | "web3d";
     type Shape = "Circle" | "Cone" | "Cube" | "Cylinder" | "Dodecahedron" |
          "Hexagon" | "Icosahedron" | "Line" | "Octagon" | "Octahedron" |
          "Quad" | "Sphere" | "Tetrahedron" | "Torus" | "Triangle";
     class Rectangle3DProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec2;
     }
     class RectangleProperties {
          bounds?: Rect;
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          color?: Color;
          alpha?: number;
          borderWidth?: number;
          radius?: number;
          borderColor?: Color;
          borderAlpha?: number;
          visible?: boolean;
     }
     class ShapeProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec3;
          shape?: Overlays.Shape;
     }
     class SphereProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec3;
     }
     class Text3DProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec2;
          isFacingAvatar?: boolean;
          text?: string;
          textAlpha?: number;
          backgroundColor?: Color;
          backgroundAlpha?: number;
          lineHeight?: number;
          leftMargin?: number;
          topMargin?: number;
          rightMargin?: number;
          bottomMargin?: number;
     }
     class TextProperties {
          bounds?: Rect;
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          margin?: number;
          leftMargin?: number;
          topMargin?: number;
          text?: string;
          lineHeight?: number;
          color?: Color;
          alpha?: number;
          backgroundColor?: Color;
          backgroundAlpha?: number;
          visible?: boolean;
     }
     class Web3DProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          isFacingAvatar?: boolean;
          url?: string;
          scriptURL?: string;
          dpi?: number;
          dimensions?: Vec2;
          maxFPS?: number;
          showKeyboardFocusHighlight?: boolean;
          inputMode?: string;
     }
     class Circle3DProperties {
          type?: string;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec2;
          startAt?: number;
          endAt?: number;
          outerRadius?: number;
          innerRadius?: number;
          color?: Color;
          startColor?: Color;
          endColor?: Color;
          innerColor?: Color;
          outerColor?: Color;
          innerStartcolor?: Color;
          innerEndColor?: Color;
          outerStartColor?: Color;
          outerEndColor?: Color;
          alpha?: number;
          startAlpha?: number;
          endAlpha?: number;
          innerAlpha?: number;
          outerAlpha?: number;
          innerStartAlpha?: number;
          innerEndAlpha?: number;
          outerStartAlpha?: number;
          outerEndAlpha?: number;
          hasTickMarks?: boolean;
          majorTickMarksAngle?: number;
          minorTickMarksAngle?: number;
          majorTickMarksLength?: number;
          minorTickMarksLength?: number;
          majorTickMarksColor?: Color;
          minorTickMarksColor?: Color;
     }
     class CubeProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec3;
     }
     class GridProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec2;
          followCamera?: boolean;
          majorGridEvery?: number;
          minorGridEvery?: number;
     }
     class Image3DProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          dimensions?: Vec2;
          isFacingAvatar?: boolean;
          url?: string;
          subImage?: Rect;
          emissive?: boolean;
     }
     class ImageProperties {
          bounds?: Rect;
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          imageURL?: string;
          subImage?: Vec2;
          color?: Color;
          alpha?: number;
          visible?: boolean;
     }
     class Line3DProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          endParentID?: Uuid;
          endParentJointIndex?: number;
          start?: Vec3;
          end?: Vec3;
          localStart?: Vec3;
          localEnd?: Vec3;
          length?: number;
          glow?: number;
          lineWidth?: number;
     }
     class ModelProperties {
          type?: string;
          color?: Color;
          alpha?: number;
          pulseMax?: number;
          pulseMin?: number;
          pulsePeriod?: number;
          alphaPulse?: number;
          colorPulse?: number;
          visible?: boolean;
          name?: string;
          position?: Vec3;
          localPosition?: Vec3;
          rotation?: Quat;
          localRotation?: Quat;
          isSolid?: boolean;
          isDashedLine?: boolean;
          ignorePickIntersection?: boolean;
          drawInFront?: boolean;
          isGroupCulled?: boolean;
          grabbable?: boolean;
          parentID?: Uuid;
          parentJointIndex?: number;
          url?: string;
          loadPriority?: number;
          dimensions?: Vec3;
          scale?: Vec3;
          textures?: Map<string, string>;
          jointNames?: Array<string>;
          jointRotations?: Array<Quat>;
          jointTranslations?: Array<Vec3>;
          jointOrientations?: Array<Quat>;
          jointPositions?: Array<Vec3>;
          animationSettings?: Entities.AnimationProperties;
     }
     class OverlayProperties {
     }
     class RayToOverlayIntersectionResult {
          intersects?: boolean;
          overlayID?: Uuid;
          distance?: number;
          surfaceNormal?: Vec3;
          intersection?: Vec3;
          extraInfo?: object;
     }
}

declare class AnimationObject {
     getJointNames(): Array<string>;
     getFrames(): Array<FBXAnimationFrame>;
}

declare class AnimationCache {
     static getAnimation(url: string): AnimationObject;
     static getResourceList(): Array<string>;
     static updateTotalSize(deltaSize: number): void;
     static prefetch(url: string, extra: object): ResourceObject;
     static dirty: Signal;
     numTotal: number;
     numCached: number;
     sizeTotal: number;
     sizeCached: number;
}

declare class AudioStats {
     static pingMsChanged: Signal;
     static inputReadMsMaxChanged: Signal;
     static inputUnplayedMsMaxChanged: Signal;
     static outputUnplayedMsMaxChanged: Signal;
     static sentTimegapMsMaxChanged: Signal;
     static sentTimegapMsAvgChanged: Signal;
     static sentTimegapMsMaxWindowChanged: Signal;
     static sentTimegapMsAvgWindowChanged: Signal;
     static mixerStreamChanged: Signal;
     static clientStreamChanged: Signal;
     static injectorStreamsChanged: Signal;
     pingMs: number;
     inputReadMsMax: number;
     inputUnplayedMsMax: number;
     outputUnplayedMsMax: number;
     sentTimegapMsMax: number;
     sentTimegapMsAvg: number;
     sentTimegapMsMaxWindow: number;
     sentTimegapMsAvgWindow: number;
     clientStream: AudioStats.AudioStreamStats;
     mixerStream: AudioStats.AudioStreamStats;
}

declare namespace AudioStats {
     class AudioStreamStats {
     }
}

declare class AudioEffectOptions {
     bandwidth: number;
     preDelay: number;
     lateDelay: number;
     reverbTime: number;
     earlyDiffusion: number;
     lateDiffusion: number;
     roomSize: number;
     density: number;
     bassMult: number;
     bassFreq: number;
     highGain: number;
     highFreq: number;
     modRate: number;
     modDepth: number;
     earlyGain: number;
     lateGain: number;
     earlyMixLeft: number;
     earlyMixRight: number;
     lateMixLeft: number;
     lateMixRight: number;
     wetDryMix: number;
}

declare class SoundObject {
     ready: Signal;
}

declare class SoundCache {
     static getSound(url: string): SoundObject;
     static getResourceList(): Array<string>;
     static updateTotalSize(deltaSize: number): void;
     static prefetch(url: string, extra: object): ResourceObject;
     static dirty: Signal;
     numTotal: number;
     numCached: number;
     sizeTotal: number;
     sizeCached: number;
}

declare class AvatarList {
     static getAvatarIdentifiers(): Array<Uuid>;
     static getAvatarsInRange(position: Vec3, range: number): Array<Uuid>;
     static getAvatar(avatarID: Uuid): AvatarData;
     static avatarAddedEvent: Signal;
     static avatarRemovedEvent: Signal;
     static avatarSessionChangedEvent: Signal;
     static isAvatarInRange(position: string, range: string): boolean;
     static sessionUUIDChanged(sessionUUID: Uuid, oldSessionUUID: Uuid): void;
     static processAvatarDataPacket(message: string, sendingNode: Uuid): void;
     static processAvatarIdentityPacket(message: string, sendingNode: Uuid): void;
     static processKillAvatar(message: string, sendingNode: Uuid): void;
}

declare class MappingObject {
     fromQml(source: Controller.Standard): RouteObject;
     makeAxisQml(source1: Controller.Hardware, source2: Controller.Hardware): RouteObject;
     from(source: Controller.Standard): RouteObject;
     makeAxis(source1: Controller.Hardware, source2: Controller.Hardware): RouteObject;
     enable(enable: boolean): MappingObject;
     disable(): MappingObject;
}

declare class RouteObject {
     toQml(destination: Controller.Standard): void;
     whenQml(expression: string): RouteObject;
     to(destination: Controller.Standard): void;
     debug(enable: boolean): RouteObject;
     peek(enable: boolean): RouteObject;
     when(expression: string): RouteObject;
     clamp(min: number, max: number): RouteObject;
     hysteresis(min: number, max: number): RouteObject;
     pulse(interval: number): RouteObject;
     scale(multiplier: number): RouteObject;
     invert(): RouteObject;
     deadZone(min: number): RouteObject;
     constrainToInteger(): RouteObject;
     constrainToPositiveInteger(): RouteObject;
     translate(translate: Vec3): RouteObject;
     transform(transform: Mat4): RouteObject;
     postTransform(transform: Mat4): RouteObject;
     rotate(rotation: Quat): RouteObject;
     lowVelocity(rotationConstant: number, translationConstant: number): RouteObject;
     exponentialSmoothing(rotationConstant: number, translationConstant: number): RouteObject;
     logicalNot(): RouteObject;
}

declare class Reticle {
     static isMouseCaptured(): boolean;
     static getAllowMouseCapture(): boolean;
     static setAllowMouseCapture(allowMouseCaptured: boolean): void;
     static isPointingAtSystemOverlay(): boolean;
     static getVisible(): boolean;
     static setVisible(visible: boolean): void;
     static getDepth(): number;
     static setDepth(depth: number): void;
     static getScale(): number;
     static setScale(scale: number): void;
     static getPosition(): Vec2;
     static setPosition(position: Vec2): void;
     static getMaximumPosition(): Vec2;
     allowMouseCapture: boolean;
     depth: number;
     maximumPosition: Vec2;
     mouseCaptured: boolean;
     pointingAtSystemOverlay: boolean;
     position: Vec2;
     scale: number;
     visible: boolean;
}

declare class Entities {
     static getMultipleEntityProperties(entityIDs: Array<Uuid>, desiredProperties: Array<string>): Array<Entities.EntityProperties>;
     static canAdjustLocks(): boolean;
     static canRez(): boolean;
     static canRezTmp(): boolean;
     static canRezCertified(): boolean;
     static canRezTmpCertified(): boolean;
     static canWriteAssets(): boolean;
     static canReplaceContent(): boolean;
     static addEntity(properties: Entities.EntityProperties, clientOnly: boolean): Uuid;
     static cloneEntity(entityID: Uuid): Uuid;
     static getEntityProperties(entityID: Uuid, desiredProperties?: Array<string>): Entities.EntityProperties;
     static editEntity(entityID: Uuid, properties: Entities.EntityProperties): Uuid;
     static deleteEntity(entityID: Uuid): void;
     static callEntityMethod(entityID: Uuid, method: string, parameters: Array<string>): void;
     static callEntityServerMethod(entityID: Uuid, method: string, parameters: Array<string>): void;
     static callEntityClientMethod(clientSessionID: Uuid, entityID: Uuid, method: string, parameters: Array<string>): void;
     static findClosestEntity(center: Vec3, radius: number): Uuid;
     static findEntities(center: Vec3, radius: number): Array<Uuid>;
     static findEntitiesInBox(corner: Vec3, dimensions: Vec3): Array<Uuid>;
     static findEntitiesInFrustum(frustum: ViewFrustum): Array<Uuid>;
     static findEntitiesByType(entityType: Entities.EntityType, center: Vec3, radius: number): Array<Uuid>;
     static findEntitiesByName(entityName: string, center: Vec3, radius: number, caseSensitive: boolean): Array<Uuid>;
     static findRayIntersection(pickRay: PickRay, precisionPicking: boolean, entitiesToInclude: Array<Uuid>, entitiesToDiscard: Array<Uuid>, visibleOnly: boolean, collideableOnly: boolean): Entities.RayToEntityIntersectionResult;
     static findRayIntersectionBlocking(pickRay: PickRay, precisionPicking: boolean, entitiesToInclude: Array<Uuid>, entitiesToDiscard: Array<Uuid>): void;
     static reloadServerScripts(entityID: Uuid): boolean;
     static getServerScriptStatus(entityID: Uuid, callback: any): boolean;
     static queryPropertyMetadata(entityID: Uuid, property: string, callback: any): boolean;
     static queryPropertyMetadata(entityID: Uuid, property: string, scope: object, callback: any): boolean;
     static setLightsArePickable(value: boolean): void;
     static getLightsArePickable(): boolean;
     static setZonesArePickable(value: boolean): void;
     static getZonesArePickable(): boolean;
     static setDrawZoneBoundaries(value: boolean): void;
     static getDrawZoneBoundaries(): boolean;
     static setVoxelSphere(entityID: Uuid, center: Vec3, radius: number, value: number): void;
     static setVoxelCapsule(entityID: Uuid, start: Vec3, end: Vec3, radius: number, value: number): void;
     static setVoxel(entityID: Uuid, position: Vec3, value: number): void;
     static setAllVoxels(entityID: Uuid, value: number): void;
     static setVoxelsInCuboid(entityID: Uuid, lowPosition: Vec3, cuboidSize: Vec3, value: number): void;
     static voxelCoordsToWorldCoords(entityID: Uuid, voxelCoords: Vec3): Vec3;
     static worldCoordsToVoxelCoords(entityID: Uuid, worldCoords: Vec3): Vec3;
     static voxelCoordsToLocalCoords(entityID: Uuid, voxelCoords: Vec3): Vec3;
     static localCoordsToVoxelCoords(entityID: Uuid, localCoords: Vec3): Vec3;
     static setAllPoints(entityID: Uuid, points: Array<Vec3>): boolean;
     static appendPoint(entityID: Uuid, point: Vec3): boolean;
     static dumpTree(): void;
     static addAction(actionType: Entities.ActionType, entityID: Uuid, arguments: Entities.ActionArguments): Uuid;
     static updateAction(entityID: Uuid, actionID: Uuid, arguments: Entities.ActionArguments): boolean;
     static deleteAction(entityID: Uuid, actionID: Uuid): boolean;
     static getActionIDs(entityID: Uuid): Array<Uuid>;
     static getActionArguments(entityID: Uuid, actionID: Uuid): Entities.ActionArguments;
     static getAbsoluteJointTranslationInObjectFrame(entityID: Uuid, jointIndex: number): Vec3;
     static getAbsoluteJointRotationInObjectFrame(entityID: Uuid, jointIndex: number): Quat;
     static setAbsoluteJointTranslationInObjectFrame(entityID: Uuid, jointIndex: number, translation: Vec3): boolean;
     static setAbsoluteJointRotationInObjectFrame(entityID: Uuid, jointIndex: number, rotation: Quat): boolean;
     static getLocalJointTranslation(entityID: Uuid, jointIndex: number): Vec3;
     static getLocalJointRotation(entityID: Uuid, jointIndex: number): Quat;
     static setLocalJointTranslation(entityID: Uuid, jointIndex: number, translation: Vec3): boolean;
     static setLocalJointRotation(entityID: Uuid, jointIndex: number, rotation: Quat): boolean;
     static setLocalJointTranslations(entityID: Uuid, translations: Array<Vec3>): boolean;
     static setLocalJointRotations(entityID: Uuid, rotations: Array<Quat>): boolean;
     static setLocalJointsData(entityID: Uuid, rotations: Array<Quat>, translations: Array<Vec3>): boolean;
     static getJointIndex(entityID: Uuid, name: string): number;
     static getJointNames(entityID: Uuid): Array<string>;
     static getChildrenIDs(parentID: Uuid): Array<Uuid>;
     static getChildrenIDsOfJoint(parentID: Uuid, jointIndex: number): Array<Uuid>;
     static isChildOfParent(childID: Uuid, parentID: Uuid): boolean;
     static getNestableType(entityID: Uuid): string;
     static getKeyboardFocusEntity(): Uuid;
     static setKeyboardFocusEntity(entityID: Uuid): void;
     static sendMousePressOnEntity(entityID: Uuid, event: PointerEvent): void;
     static sendMouseMoveOnEntity(entityID: Uuid, event: PointerEvent): void;
     static sendMouseReleaseOnEntity(entityID: Uuid, event: PointerEvent): void;
     static sendClickDownOnEntity(entityID: Uuid, event: PointerEvent): void;
     static sendHoldingClickOnEntity(entityID: Uuid, event: PointerEvent): void;
     static sendClickReleaseOnEntity(entityID: Uuid, event: PointerEvent): void;
     static sendHoverEnterEntity(entityID: Uuid, event: PointerEvent): void;
     static sendHoverOverEntity(entityID: Uuid, event: PointerEvent): void;
     static sendHoverLeaveEntity(entityID: Uuid, event: PointerEvent): void;
     static wantsHandControllerPointerEvents(entityID: Uuid): boolean;
     static emitScriptEvent(entityID: Uuid, message: string): void;
     static AABoxIntersectsCapsule(brn: Vec3, dimensions: Vec3, start: Vec3, end: Vec3, radius: number): boolean;
     static getMeshes(entityID: Uuid, callback: Function): void;
     static getEntityTransform(entityID: Uuid): Mat4;
     static getEntityLocalTransform(entityID: Uuid): Mat4;
     static getStaticCertificateJSON(entityID: Uuid): string;
     static verifyStaticCertificateProperties(entityID: Uuid): boolean;
     static collisionWithEntity: Signal;
     static canAdjustLocksChanged: Signal;
     static canRezChanged: Signal;
     static canRezTmpChanged: Signal;
     static canRezCertifiedChanged: Signal;
     static canRezTmpCertifiedChanged: Signal;
     static canWriteAssetsChanged: Signal;
     static mousePressOnEntity: Signal;
     static mouseDoublePressOnEntity: Signal;
     static mouseMoveOnEntity: Signal;
     static mouseReleaseOnEntity: Signal;
     static mousePressOffEntity: Signal;
     static mouseDoublePressOffEntity: Signal;
     static clickDownOnEntity: Signal;
     static holdingClickOnEntity: Signal;
     static clickReleaseOnEntity: Signal;
     static hoverEnterEntity: Signal;
     static hoverOverEntity: Signal;
     static hoverLeaveEntity: Signal;
     static enterEntity: Signal;
     static leaveEntity: Signal;
     static deletingEntity: Signal;
     static addingEntity: Signal;
     static clearingEntities: Signal;
     static webEventReceived: Signal;
     static setPacketsPerSecond(packetsPerSecond: number): void;
     static getPacketsPerSecond(): number;
     static serversExist(): boolean;
     static hasPacketsToSend(): boolean;
     static packetsToSendCount(): number;
     static getLifetimePPS(): number;
     static getLifetimeBPS(): number;
     static getLifetimePPSQueued(): number;
     static getLifetimeBPSQueued(): number;
     static getLifetimeInUsecs(): number;
     static getLifetimeInSeconds(): number;
     static getLifetimePacketsSent(): number;
     static getLifetimeBytesSent(): number;
     static getLifetimePacketsQueued(): number;
     static getLifetimeBytesQueued(): number;
     static preload: Signal;
     static unload: Signal;
     keyboardFocusEntity: Uuid;
}

declare namespace Entities {
     type ActionType = "far-grab" | "hold" | "offset" | "tractor" | "travel-oriented" | "hinge" | "slider" | "cone-twist" | "ball-socket" | "spring";
     type EntityType = "Box" | "Light" | "Line" | "Material" | "Model" | "ParticleEffect" | "PolyLine" | "PolyVox" | "Shape" | "Sphere" | "Text" | "Web" | "Zone"
     type PhysicsMotionType = "static" | "kinematic" | "dynamic";
     type Shape = "Circle" | "Cube" | "Cone" | "Cylinder" | "Dodecahedron" | "Hexagon" | "Icosahedron" | "Octagon" | "Octahedron" | "Quad" | "Sphere" | "Tetrahedron" | "Torus" | "Triangle";
     type PolyVoxSurfaceStyle = 0 | 1 | 2 | 3;
     class Haze {
          hazeRange: number;
          hazeColor: Color;
          hazeEnableGlare: boolean;
          hazeGlareColor: Color;
          hazeGlareAngle: number;
          hazeAltitudeEffect: boolean;
          hazeBaseRef: number;
          hazeCeiling: number;
          hazeBackgroundBlend: number;
          hazeAttenuateKeyLight: boolean;
          hazeKeyLightRange: number;
          hazeKeyLightAltitude: number;
     }
     class KeyLight {
          color: Color;
          intensity: number;
          direction: Vec3;
          castShadows: boolean;
     }
     class Skybox {
          color: Color;
          url: string;
     }
     class OffsetArguments extends ActionArguments {
          pointToOffsetFrom: Vec3;
          linearDistance: number;
          linearTimeScale: number;
     }
     class TractorArguments extends ActionArguments {
          targetPosition: Vec3;
          targetRotation: Quat;
          otherID: Uuid;
          linearTimeScale: number;
          angularTimeScale: number;
     }
     class TravelOrientedArguments extends ActionArguments {
          forward: Vec3;
          angularTimeScale: number;
     }
     class BallSocketArguments extends ActionArguments {
          pivot: Vec3;
          otherEntityID: Uuid;
          otherPivot: Vec3;
     }
     class ConeTwistArguments extends ActionArguments {
          pivot: Vec3;
          axis: Vec3;
          otherEntityID: Uuid;
          otherPivot: Vec3;
          otherAxis: Vec3;
          swingSpan1: number;
          swingSpan2: number;
          twistSpan: number;
     }
     class HingeArguments extends ActionArguments {
          pivot: Vec3;
          axis: Vec3;
          otherEntityID: Uuid;
          otherPivot: Vec3;
          otherAxis: Vec3;
          low: number;
          high: number;
          angle: number;
     }
     class SliderArguments extends ActionArguments {
          point: Vec3;
          axis: Vec3;
          otherEntityID: Uuid;
          otherPoint: Vec3;
          linearLow: number;
          linearHigh: number;
          angularLow: number;
          angularHigh: number;
          linearPosition: number;
          angularPosition: number;
     }
     class ActionArguments {
          type: Entities.ActionType;
          tag: string;
          ttl: number;
          isMine: boolean;
          noMotionState: boolean;
          active: boolean;
          motionType: Entities.PhysicsMotionType;
     }
     class FarGrabArguments extends ActionArguments {
          targetPosition?: Vec3;
          targetRotation?: Quat;
          otherID?: Uuid;
          linearTimeScale?: number;
          angularTimeScale?: number;
     }
     class HoldArguments extends ActionArguments {
          holderID?: Uuid;
          relativePosition?: Vec3;
          relativeRotation?: Vec3;
          timeScale?: number;
          hand?: string;
          kinematic?: boolean;
          kinematicSetVelocity?: boolean;
          ignoreIK?: boolean;
     }
     class AmbientLight {
          ambientIntensity?: number;
          ambientURL?: string;
     }
     class AnimationProperties {
          url?: string;
          fps?: number;
          firstFrame?: number;
          lastFrame?: number;
          currentFrame?: number;
          running?: boolean;
          loop?: boolean;
          hold?: boolean;
          allowTranslation?: boolean;
     }
     class Bloom {
          bloomIntensity?: number;
          bloomThreshold?: number;
          bloomSize?: number;
     }
     class EntityProperties {
          id?: Uuid;
          name?: string;
          type?: Entities.EntityType;
          clientOnly?: boolean;
          owningAvatarID?: Uuid;
          created?: string;
          age?: number;
          ageAsText?: string;
          lifetime?: number;
          lastEdited?: number;
          lastEditedBy?: Uuid;
          locked?: boolean;
          visible?: boolean;
          canCastShadow?: boolean;
          isVisibleInSecondaryCamera?: boolean;
          position?: Vec3;
          rotation?: Quat;
          registrationPoint?: Vec3;
          naturalPosition?: Vec3;
          naturalDimensions?: Vec3;
          velocity?: Vec3;
          damping?: number;
          angularVelocity?: Vec3;
          angularDamping?: number;
          gravity?: Vec3;
          acceleration?: Vec3;
          restitution?: number;
          friction?: number;
          density?: number;
          collisionless?: boolean;
          ignoreForCollisions?: boolean;
          collisionMask?: CollisionMask;
          collidesWith?: string;
          collisionSoundURL?: string;
          dynamic?: boolean;
          collisionsWillMove?: boolean;
          href?: string;
          description?: string;
          userData?: string;
          script?: string;
          scriptTimestamp?: number;
          serverScripts?: string;
          parentID?: Uuid;
          parentJointIndex?: number;
          localPosition?: Vec3;
          localRotation?: Quat;
          localVelocity?: Vec3;
          localAngularVelocity?: Vec3;
          localDimensions?: Vec3;
          boundingBox?: Entities.BoundingBox;
          queryAACube?: AACube;
          actionData?: string;
          renderInfo?: Entities.RenderInfo;
          cloneable?: boolean;
          cloneLifetime?: number;
          cloneLimit?: number;
          cloneDynamic?: boolean;
          cloneAvatarEntity?: boolean;
          cloneOriginID?: Uuid;
          itemName?: string;
          itemDescription?: string;
          itemCategories?: string;
          itemArtist?: string;
          itemLicense?: string;
          limitedRun?: number;
          editionNumber?: number;
          entityInstanceNumber?: number;
          marketplaceID?: string;
          certificateID?: string;
          staticCertificateVersion?: number;
     }
     class BoxProperties extends EntityProperties {
     }
     class LightProperties extends EntityProperties {
          dimensions?: Vec3;
          color?: Color;
          intensity?: number;
          falloffRadius?: number;
          isSpotlight?: boolean;
          exponent?: number;
          cutoff?: number;
     }
     class LineProperties extends EntityProperties {
          dimensions?: Vec3;
          linePoints?: Array<Vec3>;
          lineWidth?: number;
          color?: Color;
     }
     class MaterialProperties extends EntityProperties {
          materialURL?: string;
          priority?: number;
          parentMaterialName?: string;
          materialMappingMode?: string;
          materialMappingPos?: Vec2;
          materialMappingScale?: Vec2;
          materialMappingRot?: number;
          materialData?: string;
     }
     class ModelProperties extends EntityProperties {
          dimensions?: Vec3;
          color?: Color;
          modelURL?: string;
          textures?: string;
          originalTextures?: string;
          shapeType?: ShapeType;
          compoundShapeURL?: string;
          animation?: Entities.AnimationProperties;
          jointRotations?: Array<Quat>;
          jointRotationsSet?: Array<boolean>;
          jointTranslations?: Array<Vec3>;
          jointTranslationsSet?: Array<boolean>;
          relayParentJoints?: boolean;
     }
     class ParticleEffectProperties extends EntityProperties {
          isEmitting?: boolean;
          maxParticles?: number;
          lifespan?: number;
          emitRate?: number;
          emitSpeed?: number;
          speedSpread?: number;
          emitAcceleration?: Vec3;
          accelerationSpread?: Vec3;
          dimensions?: Vec3;
          emitterShouldTrail?: boolean;
          emitOrientation?: Quat;
          emitDimensions?: Vec3;
          emitRadiusStart?: number;
          polarStart?: number;
          polarFinish?: number;
          azimuthStart?: number;
          azimuthFinish?: number;
          textures?: string;
          particleRadius?: number;
          radiusStart?: number;
          radiusFinish?: number;
          radiusSpread?: number;
          color?: Color;
          colorStart?: Color;
          colorFinish?: Color;
          colorSpread?: Color;
          alpha?: number;
          alphaStart?: number;
          alphaFinish?: number;
          alphaSpread?: number;
          particleSpin?: number;
          spinStart?: number;
          spinFinish?: number;
          spinSpread?: number;
          rotateWithEntity?: boolean;
          shapeType?: ShapeType;
     }
     class PolyLineProperties extends EntityProperties {
          dimensions?: Vec3;
          linePoints?: Array<Vec3>;
          normals?: Array<Vec3>;
          strokeWidths?: Array<number>;
          lineWidth?: number;
          strokeColors?: Array<Vec3>;
          color?: Color;
          textures?: string;
          isUVModeStretch?: boolean;
     }
     class PolyVoxProperties extends EntityProperties {
          dimensions?: Vec3;
          voxelVolumeSize?: Vec3;
          voxelData?: string;
          voxelSurfaceStyle?: Entities.PolyVoxSurfaceStyle;
          xTextureURL?: string;
          yTextureURL?: string;
          zTextureURL?: string;
          xNNeighborID?: Uuid;
          yNNeighborID?: Uuid;
          zNNeighborID?: Uuid;
          xPNeighborID?: Uuid;
          yPNeighborID?: Uuid;
          zPNeighborID?: Uuid;
     }
     class ShapeProperties extends EntityProperties {
          shape?: Entities.Shape;
          dimensions?: Vec3;
          color?: Color;
     }
     class SphereProperties extends EntityProperties {
     }
     class TextProperties extends EntityProperties {
          dimensions?: Vec3;
          text?: string;
          lineHeight?: number;
          textColor?: Color;
          backgroundColor?: Color;
          faceCamera?: boolean;
     }
     class WebProperties extends EntityProperties {
          dimensions?: Vec3;
          sourceUrl?: string;
          dpi?: number;
     }
     class ZoneProperties extends EntityProperties {
          dimensions?: Vec3;
          shapeType?: ShapeType;
          compoundShapeURL?: string;
          keyLightMode?: string;
          keyLight?: Entities.KeyLight;
          ambientLightMode?: string;
          ambientLight?: Entities.AmbientLight;
          skyboxMode?: string;
          skybox?: Entities.Skybox;
          hazeMode?: string;
          haze?: Entities.Haze;
          bloomMode?: string;
          bloom?: Entities.Bloom;
          flyingAllowed?: boolean;
          ghostingAllowed?: boolean;
          filterURL?: string;
     }
     class BoundingBox {
          brn?: Vec3;
          tfl?: Vec3;
          center?: Vec3;
          dimensions?: Vec3;
     }
     class RenderInfo {
          verticesCount?: number;
          texturesCount?: number;
          textureSize?: number;
          hasTransparent?: boolean;
          drawCalls?: number;
     }
     class RayToEntityIntersectionResult {
          intersects?: boolean;
          accurate?: boolean;
          entityID?: Uuid;
          distance?: number;
          intersection?: Vec3;
          surfaceNormal?: Vec3;
          face?: BoxFace;
          extraInfo?: object;
     }
}

declare class Graphics {
     static getModel(entityID: Uuid): Graphics.Model;
     static updateModel(id: Uuid, model: Graphics.Model): boolean;
     static canUpdateModel(id: Uuid, meshIndex: number, partNumber: number): boolean;
     static newModel(meshes: Array<Graphics.Mesh>): Graphics.Model;
     static newMesh(ifsMeshData: Graphics.IFSData): Graphics.Mesh;
     static exportModelToOBJ(model: Graphics.Model): string;
}

declare namespace Graphics {
     class Material {
          name: string;
          model: string;
          opacity: number;
          roughness: number;
          metallic: number;
          scattering: number;
          unlit: boolean;
          emissiveMap: string;
          albedoMap: string;
          opacityMap: string;
          metallicMap: string;
          specularMap: string;
          roughnessMap: string;
          glossMap: string;
          normalMap: string;
          bumpMap: string;
          occlusionMap: string;
          lightmapMap: string;
          scatteringMap: string;
     }
     class MaterialLayer {
          material: Graphics.Material;
          priority: number;
     }
     class IFSData {
          name: string;
          topology: string;
          indices: Array<number>;
          vertices: Array<Vec3>;
          normals: Array<Vec3>;
          colors: Array<Vec3>;
          texCoords0: Array<Vec2>;
     }
     class Mesh {
          parts: Array<Graphics.MeshPart>;
          attributeNames: Array<string>;
          numParts: number;
          numIndices: number;
          numVertices: number;
          numAttributes: number;
          valid: boolean;
          strong: boolean;
          extents: object;
          bufferFormats: object;
     }
     class MeshPart {
          valid: boolean;
          partIndex: number;
          firstVertexIndex: number;
          baseVertexIndex: number;
          lastVertexIndex: number;
          topology: Graphics.Topology;
          attributeNames: Array<string>;
          numIndices: number;
          numVerticesPerFace: number;
          numFaces: number;
          numVertices: number;
          numAttributes: number;
          extents: object;
          bufferFormats: object;
     }
     class Model {
          objectID: Uuid;
          numMeshes: number;
          meshes: Array<Graphics.Mesh>;
          materialLayers: Map<string, Array<Graphics.MaterialLayer>>;
          materialNames: Array<string>;
     }
     type Topology = number
}

declare class Midi {
     static sendRawDword(device: number, raw: number): void;
     static sendMidiMessage(device: number, channel: number, type: number, note: number, velocity: number): void;
     static playMidiNote(status: number, note: number, velocity: number): void;
     static allNotesOff(): void;
     static resetDevices(): void;
     static listMidiDevices(output: boolean): Array<string>;
     static blockMidiDevice(name: string, output: boolean): void;
     static unblockMidiDevice(name: string, output: boolean): void;
     static thruModeEnable(enable: boolean): void;
     static broadcastEnable(enable: boolean): void;
     static typeNoteOffEnable(enable: boolean): void;
     static typeNoteOnEnable(enable: boolean): void;
     static typePolyKeyPressureEnable(enable: boolean): void;
     static typeControlChangeEnable(enable: boolean): void;
     static typeProgramChangeEnable(enable: boolean): void;
     static typeChanPressureEnable(enable: boolean): void;
     static typePitchBendEnable(enable: boolean): void;
     static typeSystemMessageEnable(enable: boolean): void;
}

declare class ModelCache {
     static getResourceList(): Array<string>;
     static updateTotalSize(deltaSize: number): void;
     static prefetch(url: string, extra: object): ResourceObject;
     static dirty: Signal;
     numTotal: number;
     numCached: number;
     sizeTotal: number;
     sizeCached: number;
}

declare class TextureCache {
     static prefetch(url: string, type: number, maxNumPixels: number): ResourceObject;
     static spectatorCameraFramebufferReset: Signal;
     static getResourceList(): Array<string>;
     static updateTotalSize(deltaSize: number): void;
     static prefetch(url: string, extra: object): ResourceObject;
     static dirty: Signal;
     numTotal: number;
     numCached: number;
     sizeTotal: number;
     sizeCached: number;
}

declare class location {
     static handleLookupString(address: string, fromSuggestions: boolean): void;
     static goToViewpointForPath(path: string, namedPath: string): void;
     static goBack(): void;
     static goForward(): void;
     static goToLocalSandbox(path: string, trigger: location.LookupTrigger): void;
     static goToEntry(trigger: location.LookupTrigger): void;
     static goToUser(username: string, matchOrientation: boolean): void;
     static goToLastAddress(): void;
     static canGoBack(): void;
     static refreshPreviousLookup(): void;
     static storeCurrentAddress(): void;
     static copyAddress(): void;
     static copyPath(): void;
     static lookupShareableNameForDomainID(domainID: Uuid): void;
     static lookupResultsFinished: Signal;
     static lookupResultIsOffline: Signal;
     static lookupResultIsNotFound: Signal;
     static possibleDomainChangeRequired: Signal;
     static possibleDomainChangeRequiredViaICEForID: Signal;
     static locationChangeRequired: Signal;
     static pathChangeRequired: Signal;
     static hostChanged: Signal;
     static goBackPossible: Signal;
     static goForwardPossible: Signal;
     domainID: Uuid;
     hostname: string;
     href: string;
     isConnected: boolean;
     pathname: string;
     placename: string;
     protocol: string;
}

declare namespace location {
     type LookupTrigger = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

declare class Messages {
     static sendMessage(channel: string, message: string, localOnly: boolean): void;
     static sendLocalMessage(channel: string, message: string): void;
     static sendData(channel: string, data: object, localOnly: boolean): void;
     static subscribe(channel: string): void;
     static unsubscribe(channel: string): void;
     static messageReceived: Signal;
     static dataReceived: Signal;
}

declare class ResourceObject {
     release(): void;
     progressChanged: Signal;
     stateChanged: Signal;
}

declare class Resources {
     static overrideUrlPrefix(prefix: string, replacement: string): void;
     static restoreUrlPrefix(prefix: string): void;
}

declare class Steam {
     static isRunning(): boolean;
     static openInviteOverlay(): void;
     running: boolean;
}

declare class Assets {
     static isValidPath(input: string): boolean;
     static isValidFilePath(input: string): boolean;
     static getATPUrl(input: string): string;
     static extractAssetHash(input: string): string;
     static isValidHash(input: string): boolean;
     static hashData(data: any): object;
     static hashDataHex(data: any): string;
     static uploadData(data: string, callback: Assets.uploadDataCallback): void;
     static downloadData(url: string, callback: Assets.downloadDataCallback): void;
     static setMapping(path: string, hash: string, callback: Assets.setMappingCallback): void;
     static getMapping(path: string, callback: Assets.getMappingCallback): void;
     static setBakingEnabled(path: string, enabled: boolean, callback: Assets.setBakingEnabledCallback): void;
     static getAsset(options: URL | Assets.GetOptions, scope: Assets.getAssetCallback, callback: Function): void;
     static putAsset(options: Assets.PutOptions, scopeCallback: Assets.putAssetResult, callback: Function): void;
     static deleteAsset(options: any, scope: any, callback: Function): void;
     static resolveAsset(options: any, scope: any, callback: Function): void;
     static decompressData(options: any, scope: any, callback: Function): void;
     static compressData(options: any, scope: any, callback: Function): void;
     static initializeCache(): boolean;
     static canWriteCacheValue(url: string): boolean;
     static getCacheStatus(scope: any, callback: Function): void;
     static queryCacheMeta(options: any, scope: any, callback: Function): void;
     static loadFromCache(options: any, scope: any, callback: Function): void;
     static saveToCache(options: any, scope: any, callback: Function): void;
     static saveToCache(url: any, data: any, metadata: any, scope: any, callback: Function): void;
}

declare namespace Assets {
     class GetOptions {
          url: string;
          responseType: string;
          decompress: boolean;
     }
     class PutOptions {
          data: ArrayBuffer;
          path: string;
          compress: boolean;
     }
     class getAssetResult {
          url: string;
          hash: string;
          response: string;
          responseType: string;
          contentType: string;
          byteLength: number;
          decompressed: number;
     }
     class putAssetResult {
          url: string;
          path: string;
          hash: string;
          compressed: boolean;
          byteLength: number;
     }
     type downloadDataCallback = (data: string) => void;
     type getAssetCallback = (error: string, result: getAssetResult) => void;
     type getMappingCallback = (assetID: string, error: string) => void;
     type puttAssetCallback = (error: string, result: putAssetResult) => void;
     type setBakingEnabledCallback = () => void;
     type setMappingCallback = (error: string) => void;
     type uploadDataCallback = (url: string, hash: string) => void;
}

declare class File {
     static convertUrlToPath(url: string): string;
     static runUnzip(path: string, url: string, autoAdd: boolean, isZip: boolean, isBlocks: boolean): void;
     static getTempDir(): string;
     static unzipResult: Signal;
}

declare class Mat4 {
     multiply(m1: Mat4, m2: Mat4): Mat4;
     createFromRotAndTrans(rot: Quat, trans: Vec3): Mat4;
     createFromScaleRotAndTrans(scale: Vec3, rot: Quat, trans: Vec3): Mat4;
     createFromColumns(col0: Vec4, col1: Vec4, col2: Vec4, col: Vec4): Mat4;
     createFromArray(numbers: Array<number>): Mat4;
     extractTranslation(m: Mat4): Vec3;
     extractRotation(m: Mat4): Vec3;
     extractScale(m: Mat4): Vec3;
     transformPoint(m: Mat4, point: Vec3): Vec3;
     transformVector(m: Mat4, vector: Vec3): Vec3;
     inverse(m: Mat4): Mat4;
     getFront(m: Mat4): Vec3;
     getForward(m: Mat4): Vec3;
     getRight(m: Mat4): Vec3;
     getUp(m: Mat4): Vec3;
     print(label: string, m: Mat4, transpose: boolean): void;
}

declare class Quat {
     x: number;
     y: number;
     z: number;
     w: number;
     multiply(q1: Quat, q2: Quat): Quat;
     normalize(q: Quat): Quat;
     conjugate(q: Quat): Quat;
     lookAt(eye: Vec3, target: Vec3, up: Vec3): Quat;
     lookAtSimple(eye: Vec3, target: Vec3): Quat;
     rotationBetween(v1: Vec3, v2: Vec3): Quat;
     fromVec3Degrees(vector: Vec3): Quat;
     fromVec3Radians(vector: Vec3): Quat;
     fromPitchYawRollDegrees(pitch: number, yaw: number, roll: number): Quat;
     fromPitchYawRollRadians(pitch: number, yaw: number, roll: number): Quat;
     inverse(q: Quat): Quat;
     getFront(orientation: Quat): Vec3;
     getForward(orientation: Quat): Vec3;
     getRight(orientation: Quat): Vec3;
     getUp(orientation: Quat): Vec3;
     safeEulerAngles(orientation: Quat): Vec3;
     angleAxis(angle: number, axis: Vec3): Quat;
     axis(q: Quat): Vec3;
     angle(q: Quat): number;
     mix(q1: Quat, q2: Quat, alpha: number): Quat;
     slerp(q1: Quat, q2: Quat, alpha: number): Quat;
     squad(q1: Quat, q2: Quat, s1: Quat, s2: Quat, alpha: number): Quat;
     dot(q1: Quat, q2: Quat): number;
     print(label: string, q: Quat, asDegrees: boolean): void;
     equal(q1: Quat, q2: Quat): boolean;
     cancelOutRollAndPitch(orientation: Quat): Quat;
     cancelOutRoll(orientation: Quat): Quat;
     static readonly IDENTITY: Quat;
}

declare class Recording {
     static loadRecording(url: string, callback: (success: boolean, url: string) => void): void;
     static startPlaying(): void;
     static pausePlayer(): void;
     static stopPlaying(): void;
     static isPlaying(): boolean;
     static isPaused(): boolean;
     static playerElapsed(): number;
     static playerLength(): number;
     static setPlayerVolume(volume: number): void;
     static setPlayerAudioOffset(audioOffset: number): void;
     static setPlayerTime(time: number): void;
     static setPlayerLoop(loop: boolean): void;
     static setPlayerUseDisplayName(useDisplayName: boolean): void;
     static setPlayerUseAttachments(useAttachments: boolean): void;
     static setPlayerUseHeadModel(useHeadModel: boolean): void;
     static setPlayerUseSkeletonModel(useSkeletonModel: boolean): void;
     static setPlayFromCurrentLocation(playFromCurrentLocation: boolean): void;
     static getPlayerUseDisplayName(): boolean;
     static getPlayerUseAttachments(): boolean;
     static getPlayerUseHeadModel(): boolean;
     static getPlayerUseSkeletonModel(): boolean;
     static getPlayFromCurrentLocation(): boolean;
     static startRecording(): void;
     static stopRecording(): void;
     static isRecording(): boolean;
     static recorderElapsed(): number;
     static getDefaultRecordingSaveDirectory(): string;
     static saveRecording(filename: string): void;
     static saveRecordingToAsset(getClipAtpUrl: Function): void;
     static loadLastRecording(): void;
}

declare class Scene {
     static shouldRenderAvatarsChanged: Signal;
     static shouldRenderEntitiesChanged: Signal;
     shouldRenderAvatars: boolean;
     shouldRenderEntities: boolean;
     stage: Scene.Stage;
}

declare namespace Scene {
     class Stage {
          setLocation(lon: number, lat: number, alt: number): void
          setOrientation(orientation: Quat): void
     }
     class KeyLight {
          color: Vec3
          intensity: number
          ambientIntensity: number
          direction: Vec3
     }
     class Location {
          longitude: number
          latitude: number
          altitude: number
     }
     class Time {
          hour: number
          day: number
     }
}

declare class AudioInjector {
     restart(): void;
     stop(): void;
     getOptions(): AudioInjector.AudioInjectorOptions;
     setOptions(options: AudioInjector.AudioInjectorOptions): void;
     getLoudness(): number;
     isPlaying(): boolean;
     finished: Signal;
     stopInjectorImmediately(): void;
}

declare namespace AudioInjector {
     class AudioInjectorOptions {
          position: Vec3;
          orientation: Quat;
          volume: number;
          pitch: number;
          loop: boolean;
          secondOffset: number;
          localOnly: boolean;
          ignorePenumbra: boolean;
     }
}

declare class Resource {
     State: Resource.State;
}

declare namespace Resource {
     class State {
          QUEUED: number;
          LOADING: number;
          LOADED: number;
          FINISHED: number;
          FAILED: number;
     }
}

declare class Script {
     static stop(marshal: boolean): void;
     static registerGlobalObject(name: string, object: object): void;
     static registerGetterSetter(name: string, getter: object, setter: object, parent: string): void;
     static registerFunction(name: string, regFunction: object, numArguments: number): void;
     static registerFunction(parent: string, name: string, regFunction: object, numArguments: number): void;
     static registerValue(name: string, value: object): void;
     static evaluate(program: string, filename: string, lineNumber: number): object;
     static evaluateInClosure(locals: object, program: object): object;
     static getContext(): string;
     static isClientScript(): boolean;
     static isDebugMode(): boolean;
     static isEntityClientScript(): boolean;
     static isEntityServerScript(): boolean;
     static isAgentScript(): boolean;
     static addEventHandler(entityID: Uuid, eventName: string, handler: Function): void;
     static removeEventHandler(entityID: Uuid, eventName: string, handler: Function): void;
     static load(filename: string): void;
     static include(filenames: Array<string>, callback: Function): void;
     static include(filename: string, callback: Function): void;
     static require(module: string): void;
     static resetModuleCache(deleteScriptCache: boolean): void;
     static setInterval(intervalFunction: Function, interval: number): object;
     static setTimeout(timeoutFunction: Function, timeout: number): object;
     static clearInterval(timer: object): void;
     static clearTimeout(timer: object): void;
     static print(message: string): void;
     static resolvePath(path: string): string;
     static resourcesPath(): string;
     static beginProfileRange(label: string): void;
     static endProfileRange(label: string): void;
     static isEntityScriptRunning(entityID: Uuid): boolean;
     static loadEntityScript(entityID: Uuid, script: string, forceRedownload: boolean): void;
     static unloadEntityScript(entityID: Uuid, shouldRemoveFromMap: boolean): void;
     static unloadAllEntityScripts(): void;
     static callEntityScriptMethod(entityID: Uuid, methodName: string, parameters: Array<string>, remoteCallerID: Uuid): void;
     static callEntityScriptMethod(entityID: Uuid, methodName: string, event: PointerEvent): void;
     static callEntityScriptMethod(entityID: Uuid, methodName: string, otherID: Uuid, collision: Collision): void;
     static requestGarbageCollection(): void;
     static generateUUID(): Uuid;
     static callAnimationStateHandler(callback: Function, parameters: object, names: Array<string>, useNames: boolean, resultHandler: object): void;
     static updateMemoryCost(deltaSize: number): void;
     static scriptLoaded: Signal;
     static errorLoadingScript: Signal;
     static update: Signal;
     static scriptEnding: Signal;
     static finished: Signal;
     static cleanupMenuItem: Signal;
     static printedMessage: Signal;
     static errorMessage: Signal;
     static warningMessage: Signal;
     static infoMessage: Signal;
     static runningStateChanged: Signal;
     static clearDebugWindow: Signal;
     static loadScript: Signal;
     static reloadScript: Signal;
     static doneRunning: Signal;
     static entityScriptDetailsUpdated: Signal;
     static entityScriptPreloadFinished: Signal;
     static executeOnScriptThread(executeFunction: object, type: number): void;
     static _requireResolve(module: string, relativeTo: string): string;
     static entityScriptContentAvailable(entityID: Uuid, scriptOrURL: string, contents: string, isURL: boolean, success: boolean, status: string): void;
     context: string;
}

declare class ScriptDiscoveryService {
     static loadOneScript(filename: string): void;
     static loadScript(filename: string, isUserLoaded: boolean, loadScriptFromEditor: boolean, activateMainWindow: boolean, reload: boolean, quitWhenFinished: boolean): boolean;
     static stopScript(scriptHash: string, restart: boolean): boolean;
     static reloadAllScripts(): void;
     static stopAllScripts(restart: boolean): void;
     static getRunning(): Array<object>;
     static getPublic(): Array<object>;
     static getLocal(): Array<object>;
     static scriptCountChanged: Signal;
     static scriptsReloading: Signal;
     static scriptLoadError: Signal;
     static printedMessage: Signal;
     static errorMessage: Signal;
     static warningMessage: Signal;
     static infoMessage: Signal;
     static errorLoadingScript: Signal;
     static clearDebugWindow: Signal;
     static onPrintedMessage(message: string, scriptName: string): void;
     static onErrorMessage(message: string, scriptName: string): void;
     static onWarningMessage(message: string, scriptName: string): void;
     static onInfoMessage(message: string, scriptName: string): void;
     static onErrorLoadingScript(url: string): void;
     static onClearDebugWindow(): void;
     static onScriptFinished(filename: string, engine: object): void;
     debugScriptUrl: string;
     defaultScriptsPath: string;
     scriptsModel: ScriptsModel;
     scriptsModelFilter: ScriptsModelFilter;
}

declare type QModelIndex = number;

declare type TreeNodeBase = any;

declare type TreeNodeFolder = any;

declare class ScriptsModel {
     index(row: number, column: number, parent: QModelIndex): QModelIndex;
     parent(child: QModelIndex): QModelIndex;
     data(index: QModelIndex, role: number): void;
     rowCount(parent: QModelIndex): number;
     columnCount(parent: QModelIndex): number;
     getTreeNodeFromIndex(index: QModelIndex): TreeNodeBase;
     getFolderNodes(parent: TreeNodeFolder): Array<TreeNodeBase>;
}

declare class ScriptsModelFilter {
}

declare class Uuid {
     fromString(string: string): Uuid;
     toString(id: Uuid): string;
     generate(): Uuid;
     isEqual(idA: Uuid, idB: Uuid): boolean;
     isNull(id: Uuid): boolean;
     print(label: string, id: Uuid): void;
     readonly NULL: Uuid;
}

declare class Users {
     static ignore(nodeID: Uuid, enable: boolean): void;
     static getIgnoreStatus(nodeID: Uuid): boolean;
     static personalMute(nodeID: Uuid, muteEnabled: boolean): void;
     static requestPersonalMuteStatus(nodeID: Uuid): boolean;
     static setAvatarGain(nodeID: Uuid, gain: number): void;
     static getAvatarGain(nodeID: Uuid): number;
     static kick(nodeID: Uuid): void;
     static mute(nodeID: Uuid): void;
     static requestUsernameFromID(nodeID: Uuid): void;
     static getCanKick(): boolean;
     static toggleIgnoreRadius(): void;
     static enableIgnoreRadius(): void;
     static disableIgnoreRadius(): void;
     static getIgnoreRadiusEnabled(): boolean;
     static canKickChanged: Signal;
     static ignoreRadiusEnabledChanged: Signal;
     static enteredIgnoreRadius: Signal;
     static usernameFromIDReply: Signal;
     static avatarDisconnected: Signal;
     canKick: boolean;
     requestsDomainListData: boolean;
}

declare class Vec3 {
     x?: number;
     y?: number;
     z?: number;
     reflect(v: Vec3, normal: Vec3): Vec3;
     cross(v1: Vec3, v2: Vec3): Vec3;
     dot(v1: Vec3, v2: Vec3): number;
     multiply(v: Vec3, scale: number): Vec3;
     multiply(scale: number, v: Vec3): Vec3;
     multiplyVbyV(v1: Vec3, v2: Vec3): Vec3;
     multiplyQbyV(q: Quat, v: Vec3): Vec3;
     sum(v1: Vec3, v2: Vec3): Vec3;
     subtract(v1: Vec3, v2: Vec3): Vec3;
     length(v: Vec3): number;
     distance(p1: Vec3, p2: Vec3): number;
     orientedAngle(v1: Vec3, v2: Vec3, ref: Vec3): number;
     normalize(v: Vec3): Vec3;
     mix(v1: Vec3, v2: Vec3, factor: number): Vec3;
     print(label: string, v: Vec3): void;
     equal(v1: Vec3, v2: Vec3): boolean;
     withinEpsilon(v1: Vec3, v2: Vec3, epsilon: number): boolean;
     toPolar(p: Vec3): Vec3;
     fromPolar(polar: Vec3): Vec3;
     fromPolar(elevation: number, azimuth: number): Vec3;
     getAngle(v1: Vec3, v2: Vec3): number;
     static readonly UNIT_X: Vec3;
     static readonly UNIT_Y: Vec3;
     static readonly UNIT_Z: Vec3;
     static readonly UNIT_NEG_X: Vec3;
     static readonly UNIT_NEG_Y: Vec3;
     static readonly UNIT_NEG_Z: Vec3;
     static readonly UNIT_XY: Vec3;
     static readonly UNIT_XZ: Vec3;
     static readonly UNIT_YZ: Vec3;
     static readonly UNIT_XYZ: Vec3;
     static readonly FLOAT_MAX: Vec3;
     static readonly FLOAT_MIN: Vec3;
     static readonly ZERO: Vec3;
     static readonly ONE: Vec3;
     static readonly TWO: Vec3;
     static readonly HALF: Vec3;
     static readonly RIGHT: Vec3;
     static readonly UP: Vec3;
     static readonly FRONT: Vec3;
}

declare class DebugDraw {
     static drawRay(start: Vec3, end: Vec3, color: Vec4): void;
     static addMarker(key: string, rotation: Quat, position: Vec3, color: Vec4): void;
     static removeMarker(key: string): void;
     static addMyAvatarMarker(key: string, rotation: Quat, position: Vec3, color: Vec4): void;
     static removeMyAvatarMarker(key: string): void;
}

declare class Paths {
     defaultScripts: string;
     resources: string;
}

declare class MeshProxy {
     getNumVertices(): number;
     getPos(index: number): Vec3;
}

declare class Camera {
     static getCameraEntity(): Uuid;
     static setCameraEntity(entityID: Uuid): void;
     static getModeString(): Camera.Mode;
     static setModeString(mode: Camera.Mode): void;
     static getPosition(): Vec3;
     static setPosition(position: Vec3): void;
     static getOrientation(): Quat;
     static setOrientation(orientation: Quat): void;
     static computePickRay(x: number, y: number): PickRay;
     static lookAt(position: Vec3): void;
     static keepLookingAt(position: Vec3): void;
     static stopLookingAt(): void;
     static modeUpdated: Signal;
     position: Vec3;
     orientation: Quat;
     mode: Camera.Mode;
     frustum: ViewFrustum;
     cameraEntity: Uuid;
}

declare namespace Camera {
     type Mode = "first person" | "third person" | "mirror" | "independent" | "entity";
}

declare class Render {
     static toJSON(): string;
     static load(map: object): void;
     static isTask(): boolean;
     static getSubConfigs(): Array<object>;
     static getNumSubs(): number;
     static getSubConfig(index: number): object;
     static load(map: object): void;
     static loaded: Signal;
     static newStats: Signal;
     static dirtyEnabled: Signal;
     static getConfig(name: string): object;
     static refresh(): void;
     cpuRunTime: number;
     enabled: boolean;
}

declare class InteractiveWindow {
     sendToQml(message: object): void;
     emitScriptEvent(message: object): void;
     emitWebEvent(message: object): void;
     close(): void;
     show(): void;
     raise(): void;
     visibleChanged: Signal;
     positionChanged: Signal;
     sizeChanged: Signal;
     presentationModeChanged: Signal;
     titleChanged: Signal;
     closed: Signal;
     fromQml: Signal;
     scriptEventReceived: Signal;
     webEventReceived: Signal;
     qmlToScript: Signal;
}

declare class OffscreenFlags {
     static navigationFocusedChanged: Signal;
     static navigationFocusDisabledChanged: Signal;
     navigationFocused: boolean;
     navigationFocusDisabled: boolean;
}

declare class OverlayWebWindow {
     getURL(): string;
     setURL(url: string): void;
     setScriptURL(script: string): void;
     urlChanged: Signal;
     initQml(properties: OverlayWindow.Properties): void;
     isVisible(): boolean;
     setVisible(visible: boolean): void;
     getPosition(): Vec2;
     setPosition(position: Vec2): void;
     setPosition(x: number, y: number): void;
     getSize(): Vec2;
     setSize(size: Vec2): void;
     setSize(width: number, height: number): void;
     setTitle(title: string): void;
     raise(): void;
     close(): void;
     getEventBridge(): object;
     sendToQml(message: object): void;
     clearDebugWindow(): void;
     emitScriptEvent(message: object): void;
     emitWebEvent(message: object): void;
     visibleChanged: Signal;
     positionChanged: Signal;
     sizeChanged: Signal;
     moved: Signal;
     resized: Signal;
     closed: Signal;
     fromQml: Signal;
     scriptEventReceived: Signal;
     webEventReceived: Signal;
     hasMoved: Signal;
     hasClosed: Signal;
     qmlToScript: Signal;
}

declare class OverlayWindow {
     initQml(properties: OverlayWindow.Properties): void;
     isVisible(): boolean;
     setVisible(visible: boolean): void;
     getPosition(): Vec2;
     setPosition(position: Vec2): void;
     setPosition(x: number, y: number): void;
     getSize(): Vec2;
     setSize(size: Vec2): void;
     setSize(width: number, height: number): void;
     setTitle(title: string): void;
     raise(): void;
     close(): void;
     getEventBridge(): object;
     sendToQml(message: object): void;
     clearDebugWindow(): void;
     emitScriptEvent(message: object): void;
     emitWebEvent(message: object): void;
     visibleChanged: Signal;
     positionChanged: Signal;
     sizeChanged: Signal;
     moved: Signal;
     resized: Signal;
     closed: Signal;
     fromQml: Signal;
     scriptEventReceived: Signal;
     webEventReceived: Signal;
     hasMoved: Signal;
     hasClosed: Signal;
     qmlToScript: Signal;
}

declare namespace OverlayWindow {
     class Properties {
          title: string;
          source: string;
          width: number;
          height: number;
          visible: boolean;
     }
}

declare class Tablet {
     static getTablet(name: string): TabletProxy;
     static playSound(sound: Tablet.AudioEvents): void;
     static tabletNotification: Signal;
}

declare class tabletInterface {
     static getTablet(name: string): TabletProxy;
     static playSound(sound: Tablet.AudioEvents): void;
     static tabletNotification: Signal;
}

declare namespace Tablet {
     type AudioEvents = 0 | 1 | 2 | 3 | 4 | 5;
}

declare class TabletProxy {
     ButtonList: {
     };
     gotoMenuScreen(submenu: string): void;
     initialScreen(url: string): void;
     gotoHomeScreen(): void;
     gotoWebScreen(url: string, injectedJavaScriptUrl: string, loadOtherBase: boolean): void;
     loadQMLSource(path: string, resizable: boolean): void;
     pushOntoStack(path: string): boolean;
     popFromStack(): void;
     loadQMLOnTop(path: string): void;
     loadWebScreenOnTop(path: string, injectedJavaScriptURL: string): void;
     returnToPreviousApp(): void;
     isMessageDialogOpen(): boolean;
     closeDialog(): void;
     addButton(properties: object): TabletButtonProxy;
     removeButton(button: TabletButtonProxy): void;
     emitScriptEvent(message: object): void;
     sendToQml(message: object): void;
     onHomeScreen(): boolean;
     setLandscape(landscape: boolean): void;
     getLandscape(): boolean;
     isPathLoaded(path: string): boolean;
     webEventReceived: Signal;
     fromQml: Signal;
     screenChanged(type: string, url: string): void;
     isTabletShownChanged: Signal;
     toolbarModeChanged(): void;
}

declare class TabletButtonProxy {
     getProperties(): TabletButtonProxy.ButtonProperties;
     editProperties(properties: TabletButtonProxy.ButtonProperties): void;
     clicked: Signal;
     propertiesChanged: Signal;
}

declare namespace TabletButtonProxy {
     class ButtonProperties {
          icon: string;
          hoverIcon: string;
          activeHoverIcon: string;
          activeIcon: string;
          text: string;
          hoverText: string;
          activeText: string;
          activeHoverText: string;
          isActive: boolean;
          sortOrder: number;
     }
}

declare class ToolbarButtonProxy {
     editProperties(properties: object): void;
     writeProperty(propertyValue: object): void;
     writeProperties(properties: object): void;
     readProperty(propertyName: string): object;
     readProperties(propertyList: Array<string>): object;
     clicked: Signal;
}

declare class ToolbarProxy {
     addButton(properties: object): ToolbarButtonProxy;
     removeButton(name: string): void;
     writeProperty(propertyValue: object): void;
     writeProperties(properties: object): void;
     readProperty(propertyName: string): object;
     readProperties(propertyList: Array<string>): object;
}

declare class Toolbars {
     static getToolbar(toolbarID: string): ToolbarProxy;
}
