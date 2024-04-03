import { useNavigate } from "react-router-dom";
import { BreadCrumbs } from "../BreadCrumbs";
import { ButtonMain } from "../Button/ButtonMain";
import { Search } from "../Input/Search";
import { Pagination } from "../Pagination";
import { ToggleBox } from "../Toggle/ToggleBox";
import { BaseGuideProps } from "./types";
import { ToggleChart } from "../Toggle/ToggleChart";
import { Header2 } from "../../assets/styles/typography";
import {
  ActionsTop,
  ActionsTopColumn,
  BaseContainer,
  PaginationWrapper,
} from "../../assets/styles/common";

export function BaseGuide({
  dataPagination,
  textActive,
  textInactive,
  showOnOff,
  onOff,
  setOnOff,
  togglewidth,
  setPageParam,
  setSearchParam,
  pageTitle,
  buttonText,
  buttonPath,
  buttonOnclick,
  canCreate,
  filters,
  children,
  links,
  toggleChart,
  onChangeChartToggle,
  canSearch,
}: BaseGuideProps) {
  const navigate = useNavigate();

  return (
    <BaseContainer>
      <BreadCrumbs links={links} />
      <ActionsTopColumn>
        <Header2>{pageTitle}</Header2>
        <ActionsTop>
          {canSearch ? (
            <Search
              inputWidth="20vw"
              onSearch={(value) => {
                setSearchParam(value);
                setPageParam(1);
              }}
            />
          ) : (
            <div />
          )}

          <div style={{ display: "flex", gap: 10 }}>
            <ButtonMain
              width="17vw"
              label={buttonText}
              onClick={(e) =>
                buttonOnclick ? buttonOnclick(e) : navigate(buttonPath || "")
              }
              disabled={!canCreate}
            />
            {toggleChart && (
              <ToggleChart
                onOff={onOff}
                onChangeSecondButton={() => {
                  onChangeChartToggle && onChangeChartToggle();
                }}
                onChangeFirstButton={() => {
                  onChangeChartToggle && onChangeChartToggle();
                  setPageParam(1);
                }}
              />
            )}
          </div>
        </ActionsTop>
        <ActionsTop>
          {showOnOff && (
            <ToggleBox
              togglewidth={togglewidth}
              textActive={textActive}
              textInactive={textInactive}
              onOff={onOff}
              onChangeInactive={() => {
                setOnOff && setOnOff(false);
                setPageParam(1);
              }}
              onChangeActive={() => {
                setOnOff && setOnOff(true);
                setPageParam(1);
              }}
            />
          )}

          {filters ? filters : null}
        </ActionsTop>
      </ActionsTopColumn>

      {children}

      {!!dataPagination?.totalItems && (
        <PaginationWrapper>
          <Pagination
            currentPage={dataPagination.currentPage}
            totalPages={dataPagination.totalPages}
            onPageChange={(page: number) => {
              setPageParam(page);
            }}
          />
        </PaginationWrapper>
      )}
    </BaseContainer>
  );
}
